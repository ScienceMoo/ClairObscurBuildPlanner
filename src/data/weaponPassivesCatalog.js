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
    passives: [
      { level: 4, effect: "Rank can't be lower than C." },
      { level: 10, effect: "Base Attack gives 4 Perfection." },
      { level: 20, effect: "Parrying gives 2 Perfection instead of 1." },
    ],
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
