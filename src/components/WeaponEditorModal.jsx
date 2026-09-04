import React from "react";
import weaponsCatalog from "../data/weaponsCatalog";
import SelectableChipGrid from "./SelectableChipGrid";

const WEAPON_STATS_FIELDS = [
  { key: "power", label: "Power" },
  { key: "element", label: "Element" },
  { key: "vitality", label: "Vitality" },
  { key: "defense", label: "Defense" },
  { key: "agility", label: "Agility" },
  { key: "luck", label: "Luck" },
];

export default function WeaponEditorModal({
  column,
  onSelect,
  onLevelChange,
  onClose,
}) {
  const characterWeapons = weaponsCatalog
    .filter((weapon) => weapon.character === column.characterName)
    .sort((a, b) => a.name.localeCompare(b.name));

  const selectedNames = column.weapon ? [column.weapon] : [];

  return (
    <div className="lumina-modal-overlay" onClick={onClose}>
      <div className="lumina-modal" onClick={(e) => e.stopPropagation()}>
        <div className="lumina-modal-header">
          <h2>{column.characterName || "Character"} — Edit Weapon</h2>
          <button className="lumina-modal-close" onClick={onClose}>
            Close
          </button>
        </div>
        <label className="weapon-level-input">
          Power Level
          <input
            type="number"
            min="1"
            value={column.weaponLevel || 1}
            onChange={(e) => onLevelChange(Number(e.target.value) || 1)}
          />
        </label>
        <p className="lumina-modal-hint">
          Type to search, press ↓ then Enter to equip, or click a Weapon
          directly. Selecting a weapon replaces the current one.
        </p>
        <SelectableChipGrid
          items={characterWeapons}
          equippedNames={selectedNames}
          onToggle={(name) => {
            onSelect(name);
            onClose();
          }}
          emptyMessage="No weapons data yet for this character."
          showImages
          statsFields={WEAPON_STATS_FIELDS}
        />
      </div>
    </div>
  );
}
