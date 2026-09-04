import React, { useEffect, useState } from "react";
import BuildDisplay from "./components/BuildDisplay";
import WeaponEditorModal from "./components/WeaponEditorModal";
import PictosEditorModal from "./components/PictosEditorModal";
import LuminaEditorModal from "./components/LuminaEditorModal";
import SkillEditorModal from "./components/SkillEditorModal";
import sampleItems from "./data/sampleItems";
import {
  applyOverrides,
  characterKey,
  getActiveAccount,
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

  // Persist only the user-editable fields (weapon/luminas/pictos/skills) per
  // character, under the currently active account, so future code updates
  // to sampleItems.js (attributes, characterName, etc.) always take effect
  // on reload.
  useEffect(() => {
    const overrides = {};
    items.columns.forEach((col, idx) => {
      overrides[characterKey(col, idx)] = {
        weapon: col.weapon,
        luminas: col.luminas,
        pictos: col.pictos,
        skills: col.skills,
      };
    });
    saveOverrides(account, overrides);
  }, [items, account]);

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
        <h1>Clair Obscur Builder</h1>
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
