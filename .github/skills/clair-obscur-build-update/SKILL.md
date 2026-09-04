---
name: clair-obscur-build-update
description: "Update the Clair Obscur build-planner React app (src/data/sampleItems.js) from screenshots of equipped weapon, pictos, luminas, or skills. Use when the user sends a picture of their in-game build/loadout, equipment screen, pictos list, luminas list, skills list, or weapon stats panel and wants the table updated."
---

# Clair Obscur Build Display — Update Skill

This repo is a frontend-only React (Vite) app that displays the user's current
build in _Clair Obscur: Expedition 33_ as a 4-column x 5-row table (one
column per unlocked character — currently Gustave, Lune, Maelle, Sciel; add
new columns for Verso/Monoco when the user unlocks them — rows: Character
Name, Weapon, Skills, Pictos, Luminas). The user periodically sends
screenshots of their equipped gear/stats; this skill explains how to turn
those into data updates.

The app also has in-browser "Edit Weapon" / "Edit Skills" / "Edit Pictos" /
"Edit Luminas" buttons per character (fullscreen searchable grids) so the
user can change things themselves without asking an agent — don't assume all
edits come from screenshots/chat.

The user's in-browser weapon/luminas/pictos/skills choices are persisted to
`localStorage` (see [src/utils/storage.js](../../../src/utils/storage.js))
keyed by character name, and layered on top of `sampleItems.js` at load time
via `applyOverrides()`. This means: (1) editing `sampleItems.js` for
`attributes`/`characterName` always takes effect on next reload, (2) but a
user's manually-edited `weapon`/`weaponLevel`/`luminas`/`pictos`/`skills`
survive reloads and are NOT visible by reading `sampleItems.js` alone.
**Never hardcode a character's actual current weapon/pictos/luminas/skills
directly in `sampleItems.js`** — doing so leaks into every account that
hasn't customized that character yet. Keep those fields as `""`/`[]`/`1` in
`sampleItems.js`.

The user has 2 separate in-game accounts, switchable via an "Account 1" /
"Account 2" toggle in the top-right of the header (`ACCOUNTS` in `App.jsx`).
Each account gets its own isolated `localStorage` bucket
(`clairObscurBuildOverrides:account1` / `:account2`); the active choice is
remembered under `clairObscurActiveAccount`. Switching accounts re-applies
`sampleItems.js` + that account's overrides — no merging between accounts.

There are also **Export**/**Import** buttons in the header (left of the
account toggle) — `exportBackup()`/`importBackup()` in `storage.js` bundle
both accounts' overrides + the active account into one JSON file for
download/restore, since all data otherwise only lives in browser
`localStorage` and would be lost if cleared.

Theme color is **orange** (Cloudflare-style, `#f6821f`), not purple — used
for "equipped"/"selected" states, buttons, and highlights throughout
`index.css`.

## Key Files

- [src/data/sampleItems.js](../../../src/data/sampleItems.js) — source of truth. `columns` is an array of one object per unlocked character with: `characterName`, `weapon` (name string), `weaponLevel` (number, default 1), `pictos` (array of equipped name strings), `luminas` (array of equipped name strings), `attributes` (plain string), `skills` (array of equipped name strings).
- [src/data/weaponsCatalog.js](../../../src/data/weaponsCatalog.js) — generated from `public/weapons.csv`: 133 weapons (`character, name, power, element, vitality, defense, agility, luck, image`), one row per weapon, NOT shared across characters (filter by `character`). Includes 27 duplicated entries for `character: "Verso"` (same stats/images as Gustave's 27, since they share the wiki's "Gustave/Verso" weapon pool) even though Verso has no `sampleItems.js` column yet — added ahead of time so his weapon data is ready the moment the user unlocks him and adds a column. Images live in `public/weapons/*.png` (real PNGs with alpha — the wiki CDN serves WebP regardless of extension/Accept header; convert with `sips -s format png <file> --out <file>` on macOS if regenerating).
- [src/data/weaponPassivesCatalog.js](../../../src/data/weaponPassivesCatalog.js) — **hand-maintained** (not generated), unlike the other catalogs. Each entry is `{ character, name, passives: [{ level, effect }] }`, scraped from individual Game8 weapon pages ("Weapon Level Passive Upgrades" tables — level milestones are usually 4/10/20, but the actual effect text is unique per weapon and only found on that weapon's own page). An empty `passives: []` means confirmed no passives (e.g. all 4 starting weapons: Noahram, Lunerim, Maellum, Scieleson). If a weapon has NO entry in this file at all, its passives are simply unknown/unscraped — don't guess; scrape that one weapon's Game8 page on request (search `game8.co Clair Obscur Expedition 33 <weapon name>`), don't bulk-scrape all 133. **Gotcha confirmed by the user in-game:** Lanceram's Game8 passive table is explicitly noted as only appearing once Verso is unlocked as a playable character — so `Gustave`/`Lanceram` here has `passives: []` (confirmed empty while Gustave-only), while `Verso`/`Lanceram` has the real 3 passives, ready for when the user adds a Verso column.
- [src/data/luminasCatalog.js](../../../src/data/luminasCatalog.js) — generated from `public/pictos-list.csv`: 193 Pictos/Lumina entries (`name, description, luminaCost, health, defence, speed, criticalRate`), shared pool across all characters (a Lumina is just an unlocked Pictos used without stats).
- [src/data/skillsCatalog.js](../../../src/data/skillsCatalog.js) — generated from `public/skills.csv`: 162 skills across 6 characters (`character, name, description, ap, spCost, prerequisite`), NOT shared — filter by `character`.
- [src/components/BuildDisplay.jsx](../../../src/components/BuildDisplay.jsx) — renders the table. Row label → column field via `rowLabel.toLowerCase().replace(/ /g, "")`. Resolves: Weapon → `weaponsCatalog` (+ `weaponPassivesCatalog` for level-gated passives, comparing `col.weaponLevel` against each passive's `level` to mark `unlocked`); Pictos/Luminas → `luminasCatalog`; Skills → `skillsCatalog` filtered by character. All equipped-name arrays are alpha-sorted before rendering. Also renders the "Power Level" number input and "Edit X" buttons per row.
- [src/components/ItemCell.jsx](../../../src/components/ItemCell.jsx) — renders a cell. Plain strings, single objects (`{name, image, description, stats, passives}`), arrays of objects (Pictos, card style), or `compact` mode (Luminas/Skills, text-only list). `passives` (if present) renders a list with `.unlocked`/`.locked` styling; `passives: []` renders "No passive abilities"; `passives: null`/undefined renders nothing (unknown).
- [src/components/SelectableChipGrid.jsx](../../../src/components/SelectableChipGrid.jsx) — shared search + keyboard-nav grid (type to filter, ↓/↑ to highlight, Enter to select/toggle) used by all 4 editor modals. Optional `showImages` (renders a thumbnail) and `statsFields` (array of `{key, label}` to render a small stat grid under the name) — both currently only used by `WeaponEditorModal.jsx`.
- [src/components/WeaponEditorModal.jsx](../../../src/components/WeaponEditorModal.jsx) — **single-select**: filtered to the character's own weapon pool, picking one replaces `column.weapon` and auto-closes (does not toggle a list like the other three editors).
- [src/components/PictosEditorModal.jsx](../../../src/components/PictosEditorModal.jsx) / [LuminaEditorModal.jsx](../../../src/components/LuminaEditorModal.jsx) — full shared `luminasCatalog`, multi-toggle.
- [src/components/SkillEditorModal.jsx](../../../src/components/SkillEditorModal.jsx) — `skillsCatalog` filtered to the character, multi-toggle.
- [src/App.jsx](../../../src/App.jsx) — owns `items` state. `toggleListMembership(columnIndex, field, name)` for `luminas`/`skills`. `togglePicto()` is separate because equipping a Pictos also auto-equips the same-named Lumina (one-directional: unequipping the Pictos does NOT remove the Lumina). `selectWeapon()` and `setWeaponLevel()` are separate single-value setters (not array toggles).
- [public/\*.csv](../../../public) — source data for the generated catalogs (`pictos-list.csv`, `skills.csv`, `weapons.csv`). Regenerate the corresponding `src/data/*Catalog.js` (small node one-liners parsing the CSV) if a CSV changes; don't hand-edit the generated files. `weaponPassivesCatalog.js` is the one exception — it's hand-maintained, not CSV-generated.
- No placeholder images anymore — `ItemCell` only renders an `<img>` when a real image exists; otherwise just the "Edit X" button shows.

## Reading a Luminas setup screenshot

The in-game Luminas screen shows every unlocked Lumina as a pill/tile with a name and lumina-point cost, in a multi-column grid. Two visual signals mean **different things**:

1. **Tile background color = equipped state.** Burgundy/dark-red background = equipped as a Lumina. Plain black/dark background = unlocked but NOT equipped. This is the ONLY signal to use.
2. **Small colored diamond icon (left of name) = also slotted as a Pictos.** Unrelated to Lumina-equipped status.

**Read colors carefully and conservatively** — a prior mistake assumed "the whole visible column is burgundy" instead of checking each tile individually, producing wrong data that had to be reverted. If ambiguous, only report what you're confident about and ask the user to confirm the rest.

## Procedure for updating from a screenshot

1. Identify the character and which row(s) the screenshot covers.
2. Look up names in the relevant catalog (`weaponsCatalog`/`weaponPassivesCatalog`, `luminasCatalog`, `skillsCatalog`) by exact match (case-insensitive fallback). If not found, ask rather than guess.
3. Edit `sampleItems.js` with `replace_string_in_file` (small, targeted edits, 3-5 lines of context) — set only the equipped-name string/array + `weaponLevel` number; never re-add per-character objects with descriptions/stats/passives baked in.
4. For new weapon images: place the file under `public/weapons/` and reference as `/weapons/<file>.png`.
5. Run `get_errors` after edits, then `npm run build` to confirm.

## Non-goals / things NOT to do

- Don't bulk-scrape per-item; single-page tables already cover ~193 pictos/luminas (`/wiki/Pictos`), 162 skills (`/wiki/Skills`), and 106 weapons' base stats (`/wiki/Weapons`) in 3 fetches. Weapon **passives** are the exception — those live on individual Game8 pages and must be fetched one weapon at a time, only when requested.
- Don't add pictos/luminas/skills images — user opted out. Weapons DO get images.
- Don't invent stats/descriptions/passives — source from a catalog or ask.
- Don't store full objects (name/description/stats/equipped) per character for pictos/luminas/skills — always just arrays of equipped name strings, resolved against the catalogs at render time. Weapon is a single name string + a `weaponLevel` number, same principle.
