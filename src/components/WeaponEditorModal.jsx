import React from "react";
import weaponsCatalog from "../data/weaponsCatalog";
import SelectableChipGrid from "./SelectableChipGrid";

export default function WeaponEditorModal({ column, onSelect, onClose }) {
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
        />
      </div>
    </div>
  );
}
