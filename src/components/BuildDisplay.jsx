import React from "react";
import ItemCell from "./ItemCell";
import weaponsCatalog from "../data/weaponsCatalog";
import weaponPassivesCatalog from "../data/weaponPassivesCatalog";
import luminasCatalog from "../data/luminasCatalog";
import skillsCatalog from "../data/skillsCatalog";
import "../index.css";

const ROW_LABELS = ["Character Name", "Weapon", "Skills", "Pictos", "Luminas"];

export default function BuildDisplay({
  items,
  onEditWeapon,
  onWeaponLevelChange,
  onEditPictos,
  onEditLuminas,
  onEditSkills,
}) {
  // items expected as array of 6 columns, each column an object with fields for each row
  // For now sampleItems provides this shape.

  function resolveWeapon(characterName, weaponName, weaponLevel) {
    if (!weaponName) return null;
    const entry = weaponsCatalog.find(
      (w) => w.character === characterName && w.name === weaponName,
    );
    if (!entry) return null;
    const stats = {};
    if (entry.power != null) stats.Power = entry.power;
    if (entry.element) stats.Element = entry.element;
    if (entry.vitality) stats.Vitality = entry.vitality;
    if (entry.defense) stats.Defense = entry.defense;
    if (entry.agility) stats.Agility = entry.agility;
    if (entry.luck) stats.Luck = entry.luck;

    const passivesEntry = weaponPassivesCatalog.find(
      (w) => w.character === characterName && w.name === weaponName,
    );
    const level = weaponLevel || 1;
    const passives = passivesEntry
      ? passivesEntry.passives.map((p) => ({
          ...p,
          unlocked: level >= p.level,
        }))
      : null;

    return { name: entry.name, image: entry.image, stats, passives };
  }

  function resolvePictos(equippedNames) {
    if (!Array.isArray(equippedNames)) return [];
    return equippedNames
      .map((name) => luminasCatalog.find((entry) => entry.name === name))
      .filter(Boolean)
      .map((entry) => {
        const stats = {};
        if (entry.health != null) stats.Health = entry.health;
        if (entry.defence != null) stats.Defence = entry.defence;
        if (entry.speed != null) stats.Speed = entry.speed;
        if (entry.criticalRate != null)
          stats["Critical Rate"] = entry.criticalRate;
        return { name: entry.name, description: entry.description, stats };
      })
      .sort((a, b) => a.name.localeCompare(b.name));
  }

  function resolveLuminas(equippedNames) {
    if (!Array.isArray(equippedNames)) return [];
    return equippedNames
      .map((name) => luminasCatalog.find((entry) => entry.name === name))
      .filter(Boolean)
      .sort((a, b) => a.name.localeCompare(b.name));
  }

  function resolveSkills(characterName, equippedNames) {
    if (!Array.isArray(equippedNames)) return [];
    return equippedNames
      .map((name) =>
        skillsCatalog.find(
          (entry) => entry.character === characterName && entry.name === name,
        ),
      )
      .filter(Boolean)
      .sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <div className="build-display">
      <table className="build-table">
        <tbody>
          {ROW_LABELS.map((rowLabel, rowIndex) => (
            <tr key={rowLabel}>
              <td className="row-label">{rowIndex === 0 ? "" : rowLabel}</td>
              {items.columns.map((col, colIndex) => (
                <td key={colIndex} className="build-cell">
                  {rowIndex === 0 ? (
                    <div className="char-name">{col.characterName || "-"}</div>
                  ) : (
                    <>
                      <ItemCell
                        title={
                          rowLabel === "Weapon"
                            ? resolveWeapon(
                                col.characterName,
                                col.weapon,
                                col.weaponLevel,
                              )
                            : rowLabel === "Pictos"
                              ? resolvePictos(col.pictos)
                              : rowLabel === "Luminas"
                                ? resolveLuminas(col.luminas)
                                : rowLabel === "Skills"
                                  ? resolveSkills(col.characterName, col.skills)
                                  : col[
                                      rowLabel.toLowerCase().replace(/ /g, "")
                                    ]
                        }
                        showImage={
                          rowLabel !== "Pictos" &&
                          rowLabel !== "Luminas" &&
                          rowLabel !== "Skills"
                        }
                        compact={
                          rowLabel === "Luminas" || rowLabel === "Skills"
                        }
                      />
                      {rowLabel === "Weapon" && (
                        <>
                          <label className="weapon-level-input">
                            Power Level
                            <input
                              type="number"
                              min="1"
                              value={col.weaponLevel || 1}
                              onChange={(e) =>
                                onWeaponLevelChange(
                                  colIndex,
                                  Number(e.target.value) || 1,
                                )
                              }
                            />
                          </label>
                          <button
                            className="edit-luminas-button"
                            onClick={() => onEditWeapon(colIndex)}
                          >
                            Edit Weapon
                          </button>
                        </>
                      )}
                      {rowLabel === "Pictos" && (
                        <button
                          className="edit-luminas-button"
                          onClick={() => onEditPictos(colIndex)}
                        >
                          Edit Pictos
                        </button>
                      )}
                      {rowLabel === "Luminas" && (
                        <button
                          className="edit-luminas-button"
                          onClick={() => onEditLuminas(colIndex)}
                        >
                          Edit Luminas
                        </button>
                      )}
                      {rowLabel === "Skills" && (
                        <button
                          className="edit-luminas-button"
                          onClick={() => onEditSkills(colIndex)}
                        >
                          Edit Skills
                        </button>
                      )}
                    </>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
