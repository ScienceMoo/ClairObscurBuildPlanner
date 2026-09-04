import React, { useEffect, useRef, useState } from "react";
import BuildDisplay from "./components/BuildDisplay";
import WeaponEditorModal from "./components/WeaponEditorModal";
import PictosEditorModal from "./components/PictosEditorModal";
import LuminaEditorModal from "./components/LuminaEditorModal";
import SkillEditorModal from "./components/SkillEditorModal";
import sampleItems from "./data/sampleItems";
import {
  applyOverrides,
  characterKey,
  exportBackup,
  getActiveAccount,
  importBackup,
  loadOverrides,
  saveOverrides,
  setActiveAccount,
} from "./utils/storage";

const ACCOUNTS = [
  { id: "account1", label: "Account 1" },
  { id: "account2", label: "Account 2" },
];

export default function App() {
  const [account, setAccount] = useState(() => getActiveAccount());
  const [items, setItems] = useState(() =>
    applyOverrides(sampleItems, loadOverrides(account)),
  );
  const [editingWeaponIndex, setEditingWeaponIndex] = useState(null);
  const [editingPictosIndex, setEditingPictosIndex] = useState(null);
  const [editingLuminasIndex, setEditingLuminasIndex] = useState(null);
  const [editingSkillsIndex, setEditingSkillsIndex] = useState(null);
  const importInputRef = useRef(null);

  // Persist only the user-editable fields (weapon/luminas/pictos/skills) per
  // character, under the currently active account, so future code updates
  // to sampleItems.js (attributes, characterName, etc.) always take effect
  // on reload.
  useEffect(() => {
    const overrides = {};
    items.columns.forEach((col, idx) => {
      overrides[characterKey(col, idx)] = {
        weapon: col.weapon,
        weaponLevel: col.weaponLevel,
        luminas: col.luminas,
        pictos: col.pictos,
        skills: col.skills,
      };
    });
    saveOverrides(account, overrides);
  }, [items, account]);

  function handleExport() {
    const backup = exportBackup();
    const blob = new Blob([JSON.stringify(backup, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `clair-obscur-build-${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
    URL.revokeObjectURL(url);
  }

  function handleImportClick() {
    importInputRef.current?.click();
  }

  function handleImportFile(event) {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(reader.result);
        importBackup(data);
        setAccount(getActiveAccount());
        setItems(
          applyOverrides(sampleItems, loadOverrides(getActiveAccount())),
        );
      } catch (err) {
        alert(`Couldn't import that file: ${err.message}`);
      }
    };
    reader.readAsText(file);
  }

  function switchAccount(newAccount) {
    setActiveAccount(newAccount);
    setAccount(newAccount);
    setItems(applyOverrides(sampleItems, loadOverrides(newAccount)));
  }

  function selectWeapon(columnIndex, weaponName) {
    setItems((prev) => {
      const columns = prev.columns.map((col, idx) =>
        idx === columnIndex ? { ...col, weapon: weaponName } : col,
      );
      return { ...prev, columns };
    });
  }

  function setWeaponLevel(columnIndex, level) {
    setItems((prev) => {
      const columns = prev.columns.map((col, idx) =>
        idx === columnIndex ? { ...col, weaponLevel: level } : col,
      );
      return { ...prev, columns };
    });
  }

  function toggleListMembership(columnIndex, field, name) {
    setItems((prev) => {
      const columns = prev.columns.map((col, idx) => {
        if (idx !== columnIndex) return col;
        const current = Array.isArray(col[field]) ? col[field] : [];
        const updated = current.includes(name)
          ? current.filter((n) => n !== name)
          : [...current, name];
        return { ...col, [field]: updated };
      });
      return { ...prev, columns };
    });
  }

  // Equipping a Pictos also equips the same-named Lumina, since any
  // equipped Pictos counts as that Lumina being equipped too. Unequipping
  // the Pictos does NOT remove the Lumina (it may already be permanently
  // unlocked independent of the current Pictos slot).
  function togglePicto(columnIndex, pictoName) {
    setItems((prev) => {
      const columns = prev.columns.map((col, idx) => {
        if (idx !== columnIndex) return col;
        const currentPictos = Array.isArray(col.pictos) ? col.pictos : [];
        const isEquipping = !currentPictos.includes(pictoName);
        const pictos = isEquipping
          ? [...currentPictos, pictoName]
          : currentPictos.filter((n) => n !== pictoName);

        const currentLuminas = Array.isArray(col.luminas) ? col.luminas : [];
        const luminas =
          isEquipping && !currentLuminas.includes(pictoName)
            ? [...currentLuminas, pictoName]
            : currentLuminas;

        return { ...col, pictos, luminas };
      });
      return { ...prev, columns };
    });
  }

  return (
    <div className="app">
      <header>
        <h1>Clair Obscur Build Planner</h1>
        <div className="header-actions">
          <div className="backup-actions">
            <button className="account-button" onClick={handleExport}>
              Export
            </button>
            <button className="account-button" onClick={handleImportClick}>
              Import
            </button>
            <input
              type="file"
              accept="application/json"
              ref={importInputRef}
              onChange={handleImportFile}
              style={{ display: "none" }}
            />
          </div>
          <div className="account-toggle">
            {ACCOUNTS.map((acc) => (
              <button
                key={acc.id}
                className={`account-button${account === acc.id ? " active" : ""}`}
                onClick={() => switchAccount(acc.id)}
              >
                {acc.label}
              </button>
            ))}
          </div>
        </div>
      </header>
      <main>
        <BuildDisplay
          items={items}
          onEditWeapon={(columnIndex) => setEditingWeaponIndex(columnIndex)}
          onEditPictos={(columnIndex) => setEditingPictosIndex(columnIndex)}
          onEditLuminas={(columnIndex) => setEditingLuminasIndex(columnIndex)}
          onEditSkills={(columnIndex) => setEditingSkillsIndex(columnIndex)}
        />
      </main>
      {editingWeaponIndex !== null && (
        <WeaponEditorModal
          column={items.columns[editingWeaponIndex]}
          onSelect={(weaponName) =>
            selectWeapon(editingWeaponIndex, weaponName)
          }
          onLevelChange={(level) => setWeaponLevel(editingWeaponIndex, level)}
          onClose={() => setEditingWeaponIndex(null)}
        />
      )}
      {editingPictosIndex !== null && (
        <PictosEditorModal
          column={items.columns[editingPictosIndex]}
          onToggle={(pictoName) => togglePicto(editingPictosIndex, pictoName)}
          onClose={() => setEditingPictosIndex(null)}
        />
      )}
      {editingLuminasIndex !== null && (
        <LuminaEditorModal
          column={items.columns[editingLuminasIndex]}
          onToggle={(luminaName) =>
            toggleListMembership(editingLuminasIndex, "luminas", luminaName)
          }
          onClose={() => setEditingLuminasIndex(null)}
        />
      )}
      {editingSkillsIndex !== null && (
        <SkillEditorModal
          column={items.columns[editingSkillsIndex]}
          onToggle={(skillName) =>
            toggleListMembership(editingSkillsIndex, "skills", skillName)
          }
          onClose={() => setEditingSkillsIndex(null)}
        />
      )}
    </div>
  );
}
