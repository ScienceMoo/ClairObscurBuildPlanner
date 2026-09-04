import React, { useEffect, useRef, useState } from "react";

// Shared search + keyboard-navigable grid used by the Pictos/Luminas/Skills
// editor modals. Type to filter, ArrowDown/ArrowUp to move the highlight,
// Enter to toggle the highlighted entry. Click still works directly.
export default function SelectableChipGrid({
  items,
  equippedNames,
  onToggle,
  emptyMessage,
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
                }`}
                onClick={() => onToggle(item.name)}
                onMouseEnter={() => setHighlightedIndex(idx)}
                title={item.description}
              >
                {item.name}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
