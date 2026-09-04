import React from "react";
import skillsCatalog from "../data/skillsCatalog";
import SelectableChipGrid from "./SelectableChipGrid";

export default function SkillEditorModal({ column, onToggle, onClose }) {
  const equippedNames = Array.isArray(column.skills) ? column.skills : [];
  const characterSkills = skillsCatalog
    .filter((skill) => skill.character === column.characterName)
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="lumina-modal-overlay" onClick={onClose}>
      <div className="lumina-modal" onClick={(e) => e.stopPropagation()}>
        <div className="lumina-modal-header">
          <h2>{column.characterName || "Character"} — Select Skills</h2>
          <button className="lumina-modal-close" onClick={onClose}>
            Close
          </button>
        </div>
        <p className="lumina-modal-hint">
          Type to search, press ↓ then Enter to toggle, or click a Skill
          directly.
        </p>
        <SelectableChipGrid
          items={characterSkills}
          equippedNames={equippedNames}
          onToggle={onToggle}
          emptyMessage="No skills data yet for this character."
        />
      </div>
    </div>
  );
}
