import React from "react";
import luminasCatalog from "../data/luminasCatalog";
import SelectableChipGrid from "./SelectableChipGrid";

export default function LuminaEditorModal({ column, onToggle, onClose }) {
  const equippedNames = Array.isArray(column.luminas) ? column.luminas : [];
  const totalPoints = equippedNames.reduce((sum, name) => {
    const entry = luminasCatalog.find((l) => l.name === name);
    return sum + (entry?.luminaCost || 0);
  }, 0);

  return (
    <div className="lumina-modal-overlay" onClick={onClose}>
      <div className="lumina-modal" onClick={(e) => e.stopPropagation()}>
        <div className="lumina-modal-header">
          <h2>{column.characterName || "Character"} — Select Luminas</h2>
          <button className="lumina-modal-close" onClick={onClose}>
            Close
          </button>
        </div>
        <div className="lumina-points-total">
          Total Lumina Points: <span>{totalPoints}</span>
        </div>
        <p className="lumina-modal-hint">
          Type to search, press ↓ then Enter to toggle, or click a Lumina
          directly. Hover a Lumina to see its effect and point cost.
        </p>
        <SelectableChipGrid
          items={luminasCatalog}
          equippedNames={equippedNames}
          onToggle={onToggle}
        />
      </div>
    </div>
  );
}
