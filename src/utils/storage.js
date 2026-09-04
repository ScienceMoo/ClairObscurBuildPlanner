const STORAGE_PREFIX = "clairObscurBuildOverrides";
const LEGACY_STORAGE_KEY = "clairObscurBuildOverrides"; // pre-account single-bucket key
const ACCOUNT_KEY = "clairObscurActiveAccount";
const DEFAULT_ACCOUNT = "account1";

// One-time migration: before multi-account support, overrides were saved
// under a single un-suffixed key. Move that data into account1's bucket so
// it isn't silently orphaned by the newer `${STORAGE_PREFIX}:${account}` key
// format. Safe to call multiple times — it's a no-op once migrated.
function migrateLegacyOverrides() {
  try {
    const legacyRaw = localStorage.getItem(LEGACY_STORAGE_KEY);
    if (!legacyRaw) return;
    const account1Key = `${STORAGE_PREFIX}:account1`;
    if (!localStorage.getItem(account1Key)) {
      localStorage.setItem(account1Key, legacyRaw);
    }
    localStorage.removeItem(LEGACY_STORAGE_KEY);
  } catch {
    // localStorage unavailable — ignore
  }
}

migrateLegacyOverrides();

// Stores only what the user has manually edited in-browser (equipped luminas,
// pictos, and skills), keyed by character name, so code-driven updates to
// sampleItems.js (weapon, attributes, characterName, etc.) always stay
// authoritative. Each account (e.g. "account1"/"account2") gets its own
// storage bucket so two in-game accounts can be tracked independently.
export function getActiveAccount() {
  try {
    return localStorage.getItem(ACCOUNT_KEY) || DEFAULT_ACCOUNT;
  } catch {
    return DEFAULT_ACCOUNT;
  }
}

export function setActiveAccount(account) {
  try {
    localStorage.setItem(ACCOUNT_KEY, account);
  } catch {
    // localStorage unavailable — ignore
  }
}

export function loadOverrides(account) {
  try {
    const raw = localStorage.getItem(`${STORAGE_PREFIX}:${account}`);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function saveOverrides(account, overrides) {
  try {
    localStorage.setItem(
      `${STORAGE_PREFIX}:${account}`,
      JSON.stringify(overrides),
    );
  } catch {
    // localStorage unavailable (private browsing, quota, etc.) — ignore
  }
}

export function characterKey(column, index) {
  return column.characterName || `column-${index}`;
}

export function applyOverrides(defaultItems, overrides) {
  const columns = defaultItems.columns.map((col, idx) => {
    const key = characterKey(col, idx);
    const override = overrides[key];
    if (!override) return col;
    return {
      ...col,
      ...(override.weapon !== undefined ? { weapon: override.weapon } : {}),
      ...(override.luminas !== undefined ? { luminas: override.luminas } : {}),
      ...(override.pictos !== undefined ? { pictos: override.pictos } : {}),
      ...(override.skills !== undefined ? { skills: override.skills } : {}),
    };
  });
  return { ...defaultItems, columns };
}
