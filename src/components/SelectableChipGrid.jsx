import React, { useEffect, useRef, useState } from "react";

function buildTooltip(item) {
  const extras = [];
  if (item.luminaCost != null) extras.push(`Cost: ${item.luminaCost}`);
  if (item.ap != null) extras.push(`AP: ${item.ap}`);
  if (item.spCost != null) extras.push(`SP: ${item.spCost}`);
  if (!item.description) return extras.length ? `(${extras.join(", ")})` : "";
  return extras.length
    ? `${item.description} (${extras.join(", ")})`
    : item.description;
}

// Shared search + keyboard-navigable grid used by the Pictos/Luminas/Skills
// editor modals. Type to filter, ArrowDown/ArrowUp to move the highlight,
// Enter to toggle the highlighted entry. Click still works directly.
export default function SelectableChipGrid({
  items,
  equippedNames,
  onToggle,
  emptyMessage,
  showImages = false,
  statsFields = [],
}) {
  const [query, setQuery] = useState("");
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const chipRefs = useRef([]);

  const filtered = items.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase()),
  );

  useEffect(() => {
    setHighlightedIndex(0);
  }, [query]);

  useEffect(() => {
    const el = chipRefs.current[highlightedIndex];
    if (el) el.scrollIntoView({ block: "nearest" });
  }, [highlightedIndex, filtered.length]);

  function handleKeyDown(e) {
    if (filtered.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const item = filtered[highlightedIndex];
      if (item) onToggle(item.name);
    }
  }

  return (
    <div className="selectable-grid">
      <input
        type="text"
        className="selectable-grid-search"
        placeholder="Type to search… (↓ then Enter to select)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        autoFocus
      />
      {filtered.length === 0 ? (
        <p className="lumina-modal-empty">
          {emptyMessage || "No matches found."}
        </p>
      ) : (
        <div className="lumina-grid">
          {filtered.map((item, idx) => {
            const equipped = equippedNames.includes(item.name);
            const highlighted = idx === highlightedIndex;
            return (
              <button
                key={item.name}
                ref={(el) => (chipRefs.current[idx] = el)}
                className={`lumina-chip${equipped ? " selected" : ""}${
                  highlighted ? " highlighted" : ""
                }${showImages || statsFields.length ? " with-image" : ""}`}
                onClick={() => onToggle(item.name)}
                onMouseEnter={() => setHighlightedIndex(idx)}
                title={buildTooltip(item)}
              >
                {showImages && item.image && (
                  <img src={item.image} alt="" className="lumina-chip-image" />
                )}
                {statsFields.length > 0 ? (
                  <div className="lumina-chip-content">
                    <span className="lumina-chip-name-text">{item.name}</span>
                    <ul className="lumina-chip-stats">
                      {statsFields.map(
                        ({ key, label }) =>
                          item[key] != null && (
                            <li key={key}>
                              <span className="stat-key">{label}</span>
                              <span className="stat-value">{item[key]}</span>
                            </li>
                          ),
                      )}
                    </ul>
                  </div>
                ) : (
                  item.name
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
