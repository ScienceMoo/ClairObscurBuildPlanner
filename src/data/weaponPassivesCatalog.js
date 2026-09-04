// Manually-maintained catalog of level-gated weapon passive abilities,
// scraped from individual Game8 weapon pages (per-weapon "Weapon Level
// Passive Upgrades" tables). NOT all weapons have passives — many base/early
// weapons have none, confirmed by an empty `passives` array. Only weapons
// that have actually been checked appear here; if a weapon isn't listed at
// all, its passives are simply unknown/not yet scraped (ask the user or
// fetch its Game8 page on demand — see SKILL.md).
const weaponPassivesCatalog = [
  {
    character: "Gustave",
    name: "Noahram",
    passives: [], // confirmed: no passive abilities (base starting weapon)
  },
  {
    character: "Lune",
    name: "Lunerim",
    passives: [], // confirmed: no passive abilities (base starting weapon)
  },
  {
    character: "Maelle",
    name: "Maellum",
    passives: [], // confirmed: no passive abilities (base starting weapon)
  },
  {
    character: "Sciel",
    name: "Scieleson",
    passives: [], // confirmed: no passive abilities (base starting weapon)
  },
  {
    character: "Gustave",
    name: "Lanceram",
    // Game8's per-level passive table for this weapon ("Rank can't be lower
    // than C." / "Base Attack gives 4 Perfection." / "Parrying gives 2
    // Perfection instead of 1.") is explicitly noted as ONLY appearing once
    // Verso is unlocked as a playable character. Confirmed in-game by the
    // user (Gustave-only, no Verso yet) that Lanceram currently shows no
    // passive abilities — so this is empty until Verso is unlocked.
    passives: [],
  },
  {
    character: "Maelle",
    name: "Medalum",
    passives: [
      { level: 4, effect: "Start in Virtuose Stance." },
      {
        level: 10,
        effect: "In Virtuose Stance, every Burn applied is doubled.",
      },
      { level: 20, effect: "In Virtuose Stance, Burn deals double damage." },
    ],
  },
  {
    character: "Lune",
    name: "Trebuchim",
    passives: [
      { level: 4, effect: "Generate a random Stain on Free Aim shot." },
      { level: 10, effect: "+1 AP when Stains are consumed." },
      { level: 20, effect: "Base Attack generates 2 random Stains." },
    ],
  },
];

export default weaponPassivesCatalog;
