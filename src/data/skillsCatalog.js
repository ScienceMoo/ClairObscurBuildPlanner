const skillsCatalog = [
  {
    "character": "Gustave",
    "name": "From Fire",
    "description": "Deals medium single target damage. 3 hits.; Uses weapon's element.; Heals self by 20% if the target Burns",
    "ap": 4,
    "spCost": 2,
    "prerequisite": "Marking Shot"
  },
  {
    "character": "Gustave",
    "name": "Lumière Assault",
    "description": "Deals low single target damage. 5 hits.; Uses weapon's element.; Critical Hits generate 1 additional Charge",
    "ap": 3,
    "spCost": null,
    "prerequisite": null
  },
  {
    "character": "Gustave",
    "name": "Marking Shot",
    "description": "Deals low single target Lightning damage. 1 hit.; Applies Mark",
    "ap": 3,
    "spCost": 1,
    "prerequisite": "Overcharge"
  },
  {
    "character": "Gustave",
    "name": "Overcharge",
    "description": "Deals high single target Lightning damage based on the amount of Charges 1 hit.; Can Break ; Resets Charges",
    "ap": 4,
    "spCost": null,
    "prerequisite": null
  },
  {
    "character": "Gustave",
    "name": "Powerful",
    "description": "Applies Powerful to 1-3 allies, increasing the damage they deal for 3 turns.; Gives 0 to 2 Charges",
    "ap": 3,
    "spCost": 1,
    "prerequisite": "Lumière Assault"
  },
  {
    "character": "Gustave",
    "name": "Recovery",
    "description": "Recovers +50% Health and dispels Status Effects.; Gives 0-2 Charges",
    "ap": 3,
    "spCost": 2,
    "prerequisite": "Powerful"
  },
  {
    "character": "Gustave",
    "name": "Shatter",
    "description": "Deals High Lightning damage to all enemies. 1 hit.; Can Break ; If a target is Broken by the hit, Overcharge is fully Charged",
    "ap": 5,
    "spCost": 6,
    "prerequisite": "Recovery"
  },
  {
    "character": "Gustave",
    "name": "Strike Storm",
    "description": "Deals very high single target damage. 6 hits.; Uses weapon's element.; Critical Hits generate 2 additional Charges",
    "ap": 7,
    "spCost": 10,
    "prerequisite": "From Fire"
  },
  {
    "character": "Lune",
    "name": "Crippling Tsunami",
    "description": "Deals medium Ice damage to all enemies. 1 hit.; Applies Slow for 3 turns.; Consumes for greatly increased damage.",
    "ap": 5,
    "spCost": 6,
    "prerequisite": "Thermal Transfer"
  },
  {
    "character": "Lune",
    "name": "Crustal Crush",
    "description": "Deals high single target Earth and Break damage 5 hits.; Consumes : Increased damage.",
    "ap": 7,
    "spCost": 6,
    "prerequisite": "Rockslide"
  },
  {
    "character": "Lune",
    "name": "Earth Rising",
    "description": "Deals low Earth damage to all enemies. 1 hit.; Consumes for increased damage.",
    "ap": 3,
    "spCost": 1,
    "prerequisite": null
  },
  {
    "character": "Lune",
    "name": "Electrify",
    "description": "Deals low single target Lightning damage. 3 hits.; Critical Hits trigger an additional hit.; Consumes to generate one",
    "ap": 1,
    "spCost": 1,
    "prerequisite": "Thunderfall"
  },
  {
    "character": "Lune",
    "name": "Elemental Genesis",
    "description": "Deals extreme damage to all enemies. 8 hits.; Each hit deals damage in a random element.; Can only be cast with",
    "ap": 4,
    "spCost": 10,
    "prerequisite": "Storm Caller"
  },
  {
    "character": "Lune",
    "name": "Elemental Trick",
    "description": "Deals low single target Ice, Fire, Lightning, and Earth damage. 4 hits.; Critical Hits generate the corresponding Stain.",
    "ap": 3,
    "spCost": 4,
    "prerequisite": "Mayhem"
  },
  {
    "character": "Lune",
    "name": "Fire Rage",
    "description": "Deals increasingly high Fire damage to all enemies every turn until Lune receives damage.; Stuns self if interrupted.; Consumes : Increased damage.",
    "ap": 5,
    "spCost": 6,
    "prerequisite": "Wildfire"
  },
  {
    "character": "Lune",
    "name": "Healing Light",
    "description": "Heals the targeted ally by 30-50% Health and dispels Status Effects.; Consumes : Costs 0 AP",
    "ap": 3,
    "spCost": 1,
    "prerequisite": null
  },
  {
    "character": "Lune",
    "name": "Hell",
    "description": "Deals very high Fire damage that applies 5 Burn per hit to all enemies. 2 hits.; Deals self-damage if failed.; Consumes : Greatly increased damage.",
    "ap": 9,
    "spCost": 10,
    "prerequisite": "Fire Rage"
  },
  {
    "character": "Lune",
    "name": "Ice Lance",
    "description": "Deals medium single target Ice damage that Slows the target. 1 hit.; Consumes to deal increased damage.",
    "ap": 4,
    "spCost": null,
    "prerequisite": null
  },
  {
    "character": "Lune",
    "name": "Immolation",
    "description": "Deals low single target Fire damage and 3 Burn. 1 hit.; Applies 2 more Burns if the target is Marked; Consumes for increased damage.",
    "ap": 2,
    "spCost": null,
    "prerequisite": null
  },
  {
    "character": "Lune",
    "name": "Lightning Dance",
    "description": "Deals very high single target Lightning damage. 6 hits.; Critical Hits trigger an additional hit.; Consumes : Greatly increased damage.",
    "ap": 7,
    "spCost": 6,
    "prerequisite": "Electrify"
  },
  {
    "character": "Lune",
    "name": "Mayhem",
    "description": "Consumes all Stains to deal high elemental damage to the target.; Can Break if 4 Stains are consumed.",
    "ap": 3,
    "spCost": 4,
    "prerequisite": "Electrify"
  },
  {
    "character": "Lune",
    "name": "Rebirth",
    "description": "Revives an ally with 30-70% Health and 2 additional AP; Consumes : Costs 0 AP",
    "ap": 5,
    "spCost": 4,
    "prerequisite": "Healing Light"
  },
  {
    "character": "Lune",
    "name": "Revitalization",
    "description": "Heals 1-3 allies by 40-60% Health.; Consumes 3 s to also apply Regen that heals on turn start for 3 turns.",
    "ap": 5,
    "spCost": 6,
    "prerequisite": "Rebirth"
  },
  {
    "character": "Lune",
    "name": "Rockslide",
    "description": "Deals medium single target Earth damage. 2 hits.; Can Break; Consumes for greatly increased damage.",
    "ap": 5,
    "spCost": 2,
    "prerequisite": "Earth Rising"
  },
  {
    "character": "Lune",
    "name": "Sky Break",
    "description": "Deals extreme damage to all enemies. 1 hit.; Element depends on which Stains Lune has the most.; Can Break",
    "ap": null,
    "spCost": null,
    "prerequisite": "Lune"
  },
  {
    "character": "Lune",
    "name": "Storm Caller",
    "description": "All enemies receive medium Lightning damage at the end of their turn, and low Lightning damage when they receive damage.; Duration: 3 turns.; Consumes for double thunder strikes on turn end.",
    "ap": 6,
    "spCost": 8,
    "prerequisite": "Lightning Dance"
  },
  {
    "character": "Lune",
    "name": "Terraquake",
    "description": "Deals low Earth damage and Break damage to all enemies every turn. Also increases all Break damage received by 50%.; Duration: 3 turns.; Consumes to increase the Duration to 5 turns.",
    "ap": 5,
    "spCost": 10,
    "prerequisite": "Crustal Crush"
  },
  {
    "character": "Lune",
    "name": "Thermal Transfer",
    "description": "Deals low single target Ice damage. 2 hits.; Gains 4 AP if target is Burning; Consumes : Play a second turn.",
    "ap": 2,
    "spCost": 2,
    "prerequisite": "Earth Rising"
  },
  {
    "character": "Lune",
    "name": "Thunderfall",
    "description": "Deals medium Lightning damage to random enemies. 2-6 hits.; Critical Hits trigger an additional hit.; Consumes for increased damage.",
    "ap": 5,
    "spCost": 1,
    "prerequisite": null
  },
  {
    "character": "Lune",
    "name": "Tree of Life",
    "description": "Cleanses all status effects and Heals all allies.",
    "ap": null,
    "spCost": null,
    "prerequisite": "Reach Relationship Level 5 with Lune"
  },
  {
    "character": "Lune",
    "name": "Tremor",
    "description": "Deals high Earth damage to all enemies. 1 hit.; Removes all enemies' Shields",
    "ap": null,
    "spCost": null,
    "prerequisite": "Reach Relationship Level 3 with Lune"
  },
  {
    "character": "Lune",
    "name": "Typhoon",
    "description": "On turn start, deals high Ice damage to all enemies and Heals allies.; Consumes : Duration increased from 3 to 5 turns.",
    "ap": 8,
    "spCost": 8,
    "prerequisite": "Crippling Tsunami"
  },
  {
    "character": "Lune",
    "name": "Wildfire",
    "description": "Deals medium Fire damage to all enemies. 1 hit.; Applies 3 Burn; Consumes 2 : Increased damage.",
    "ap": 4,
    "spCost": 2,
    "prerequisite": "Thunderfall"
  },
  {
    "character": "Maelle",
    "name": "Breaking Rules",
    "description": "Deals low single target Physical damage. 2 hits.; Destroys all target's Shields Gains 1 AP per Shield destroyed.; If target is Defenceless, play a second turn.",
    "ap": 3,
    "spCost": 4,
    "prerequisite": "Fleuret Fury"
  },
  {
    "character": "Maelle",
    "name": "Burning Canvas",
    "description": "Deal high single target Void damage. 5 hits.; Applies 1 Burn per hit. Damage increased for each Burn on the target.",
    "ap": 5,
    "spCost": 6,
    "prerequisite": "Phantom Strike"
  },
  {
    "character": "Maelle",
    "name": "Combustion",
    "description": "Deals medium single target Physical Damage. 2 hits.; Consumes up to 10 Burn for increased damage.",
    "ap": 4,
    "spCost": 6,
    "prerequisite": "Rain of Fire"
  },
  {
    "character": "Maelle",
    "name": "Degagement",
    "description": "Deals low single target Fire damage. 1 hit.; Target becomes weak to Fire damage for 2 turns",
    "ap": 2,
    "spCost": 2,
    "prerequisite": "Spark"
  },
  {
    "character": "Maelle",
    "name": "Égide",
    "description": "Protects allies by taking damage in their place, for 2 turns.; Duration is extended by 1 on gaining Shell",
    "ap": 3,
    "spCost": 4,
    "prerequisite": "Guard Up"
  },
  {
    "character": "Maelle",
    "name": "Fencer's Flurry",
    "description": "Deals medium damage to all enemies. 1 hit.; Uses weapon's element.; Applies Defenceless for 1 turn.",
    "ap": 4,
    "spCost": 6,
    "prerequisite": "Breaking Rules"
  },
  {
    "character": "Maelle",
    "name": "Fleuret Fury",
    "description": "Deals high single target Physical damage. 3 hits.; If in Virtuose Stance , stay in Virtuose Stance ; Can Break",
    "ap": 6,
    "spCost": 2,
    "prerequisite": "Guard Up"
  },
  {
    "character": "Maelle",
    "name": "Gommage",
    "description": "Kills weak targets.; Otherwise deals extreme Void damage. 1 hit.",
    "ap": null,
    "spCost": null,
    "prerequisite": "Reach Relationship Level 7 (max) with Maelle"
  },
  {
    "character": "Maelle",
    "name": "Guard Down",
    "description": "Applies Defenceless to all enemies for 3 turns.",
    "ap": 3,
    "spCost": 4,
    "prerequisite": "Guard Up"
  },
  {
    "character": "Maelle",
    "name": "Guard Up",
    "description": "Applies Shell, reducing damage taken, to up to 3 allies for 3 turns.",
    "ap": 3,
    "spCost": 2,
    "prerequisite": "Swift Stride"
  },
  {
    "character": "Maelle",
    "name": "Gustave's Homage",
    "description": "Deals high single target Lightning damage. 8 hits.; Increased damage to Marked targets. Doesn't remove Mark.",
    "ap": 8,
    "spCost": null,
    "prerequisite": "Write in journal in Act II"
  },
  {
    "character": "Maelle",
    "name": "Last Chance",
    "description": "Reduces self-Health to 1 but refills all AP; Switches to Virtuose Stance",
    "ap": 1,
    "spCost": 6,
    "prerequisite": "Mezzo Forte"
  },
  {
    "character": "Maelle",
    "name": "Mezzo Forte",
    "description": "Reapplies current stance and gives 2-4 AP",
    "ap": 1,
    "spCost": 4,
    "prerequisite": "Degagement"
  },
  {
    "character": "Maelle",
    "name": "Momentum Strike",
    "description": "Deals high single target damage. 1 hit.; Uses weapon's element.; Increases damage to Marked targets.; Virtuose Stance : Costs 4 AP",
    "ap": 7,
    "spCost": 6,
    "prerequisite": "Égide"
  },
  {
    "character": "Maelle",
    "name": "Offensive Switch",
    "description": "Deals low single target damage and applies Defenceless for 3 turns. 1 hit.; Uses weapon's element.",
    "ap": 1,
    "spCost": null,
    "prerequisite": null
  },
  {
    "character": "Maelle",
    "name": "Payback",
    "description": "Deals very high single target Physical damage. 1 hit.; Reduced AP cost for each attack parried since last turn.; Can Break",
    "ap": 9,
    "spCost": 8,
    "prerequisite": "Last Chance"
  },
  {
    "character": "Maelle",
    "name": "Percée",
    "description": "Deals medium single target Physical damage. 1 hit.; Increased damage to Marked targets.; Virtuose Stance : Costs 2 AP",
    "ap": 5,
    "spCost": null,
    "prerequisite": null
  },
  {
    "character": "Maelle",
    "name": "Phantom Strike",
    "description": "Deals very high Void damage to all enemies. 4 hits.; Also gives +35% of a Gradient Charge.",
    "ap": 7,
    "spCost": 4,
    "prerequisite": "Offensive Switch"
  },
  {
    "character": "Maelle",
    "name": "Phoenix Flame",
    "description": "Applies 10 Burn to all enemies and revives all allies with 50 to 70% Health.",
    "ap": null,
    "spCost": null,
    "prerequisite": "Reach Relationship Level 5 with Maelle"
  },
  {
    "character": "Maelle",
    "name": "Pyrolyse",
    "description": "Deals extreme single target Fire damage. 3 hits.; Applies 5 Burn per hit.; Offensive Stance : Applies 2 more Burn per hit.",
    "ap": 9,
    "spCost": 8,
    "prerequisite": "Revenge"
  },
  {
    "character": "Maelle",
    "name": "Rain of Fire",
    "description": "Deals medium single target Fire damage. 2 hits.; Applies 3 Burn per hit.; Defense Stance : applies 2 more Burn per hit.",
    "ap": 5,
    "spCost": 4,
    "prerequisite": "Degagement"
  },
  {
    "character": "Maelle",
    "name": "Revenge",
    "description": "Deals high single target Fire damage. 1 hit.; Damage increased for reach hit received since the previous turn.; Can Break",
    "ap": 5,
    "spCost": 6,
    "prerequisite": "Combustion"
  },
  {
    "character": "Maelle",
    "name": "Spark",
    "description": "Deals low single target Fire damage. 1 hit.; Apples 3 Burn; Offensive Stance : Applies 2 more Burn",
    "ap": 3,
    "spCost": null,
    "prerequisite": null
  },
  {
    "character": "Maelle",
    "name": "Stendhal",
    "description": "Deals extreme single target Void damage. 1 hit.; Removes self-Shields and self applies Defenceless",
    "ap": 8,
    "spCost": 4,
    "prerequisite": "Percée"
  },
  {
    "character": "Maelle",
    "name": "Swift Stride",
    "description": "Deals low single target Physical damage. 1 hit.; Switches to Virtuose Stance if target is Burning; Regains 0 to 2 AP",
    "ap": 3,
    "spCost": 1,
    "prerequisite": "Percée"
  },
  {
    "character": "Maelle",
    "name": "Sword Ballet",
    "description": "Deals extreme single target damage. 5 hits.; Uses weapon's element.; Critical Hits deal double damage.",
    "ap": 9,
    "spCost": 10,
    "prerequisite": "Fencer's Flurry"
  },
  {
    "character": "Maelle",
    "name": "Virtuose Strike",
    "description": "Deals high single target Physical damage. 5 hits.",
    "ap": null,
    "spCost": null,
    "prerequisite": "Reach Relationship Level 3 with Maelle"
  },
  {
    "character": "Monoco",
    "name": "Abbest Wind",
    "description": "Deals low single target Physical damage. 1 hit; Plays a second turn.; Agile Mask: Costs 0 AP",
    "ap": 2,
    "spCost": null,
    "prerequisite": "Abbest"
  },
  {
    "character": "Monoco",
    "name": "Aberration Light",
    "description": "Deals high Light damage to all enemies. 2 hits.; Applies 4 Burn per hit.; Agile Mask: Applies 2 more Burn per hit.",
    "ap": 7,
    "spCost": null,
    "prerequisite": "Aberration"
  },
  {
    "character": "Monoco",
    "name": "Ballet Charm",
    "description": "Deals low single target Light damage. 1 hit.; Applies Powerless to the target for 3 turns.; Caster Mask: Increased damage.",
    "ap": 2,
    "spCost": null,
    "prerequisite": "Ballet"
  },
  {
    "character": "Monoco",
    "name": "Bénisseur Mortar",
    "description": "Deals medium single target Ice damage. 3 hits.; Change to Almighty Mask if target is Marked; Caster Mask: Increased damage.",
    "ap": 5,
    "spCost": null,
    "prerequisite": "Bénisseur"
  },
  {
    "character": "Monoco",
    "name": "Boucheclier Fortify",
    "description": "Applies Shell to 1-3 allies for 3 turns.; Heavy Mask: Also applies 1 Shield",
    "ap": 3,
    "spCost": null,
    "prerequisite": "Boucheclier"
  },
  {
    "character": "Monoco",
    "name": "Braseleur Smash",
    "description": "Deals medium single target Fire damage and applies 3 Burn. 2 hits.; Balanced Mask: Increased damage",
    "ap": 4,
    "spCost": null,
    "prerequisite": "Braseleur"
  },
  {
    "character": "Monoco",
    "name": "Break Point",
    "description": "Deals extreme single target damage. 1 hit.; Uses weapon's element.; Fills the target's Break Bar and Breaks it.",
    "ap": null,
    "spCost": null,
    "prerequisite": "Monoco"
  },
  {
    "character": "Monoco",
    "name": "Bruler Bash",
    "description": "Deals medium single target Physical damage. 3 hits.; Can Break ; Caster Mask: Increased damage.",
    "ap": 4,
    "spCost": null,
    "prerequisite": "Bruler"
  },
  {
    "character": "Monoco",
    "name": "Chalier Combo",
    "description": "Deals high single target Physical damage. 6 hits.; Interrupted if failed.; Balanced Mask: Increased damage.",
    "ap": 7,
    "spCost": null,
    "prerequisite": "Chalier"
  },
  {
    "character": "Monoco",
    "name": "Chapelier Slash",
    "description": "Deals high Physical damage to all enemies. 3 hits.; Applies Mark; Agile Mask: Increased damage.",
    "ap": 7,
    "spCost": null,
    "prerequisite": "Chapelier"
  },
  {
    "character": "Monoco",
    "name": "Chevalière Ice",
    "description": "Deals high Ice damage to all enemies. 3 hits.; Applies Slow to the targets for 3 turns.; Balanced Mask: Increased damage.",
    "ap": 6,
    "spCost": null,
    "prerequisite": "Gold Chevalière"
  },
  {
    "character": "Monoco",
    "name": "Chevalière Piercing",
    "description": "Deals single target Physical damage through Shields. 6 hits.; Damage increased for each Shield on the target.; Agile Mask: Increased damage.",
    "ap": 3,
    "spCost": null,
    "prerequisite": "Ceramic Chevalière"
  },
  {
    "character": "Monoco",
    "name": "Chevalière Thrusts",
    "description": "Deals high Physical damage to all enemies. 3 hits.; Critical Hits deal double damage.; Heavy Mask: Increased damage.",
    "ap": 7,
    "spCost": null,
    "prerequisite": "Steel Chevalière"
  },
  {
    "character": "Monoco",
    "name": "Clair Enfeeble",
    "description": "Deals medium Light damage to all enemies. 1 hit.; Applies Powerless for 3 turns.; Balanced Mask: Increased damage.",
    "ap": 5,
    "spCost": null,
    "prerequisite": "Clair"
  },
  {
    "character": "Monoco",
    "name": "Contorsionniste Blast",
    "description": "Deals medium Physical damage to all enemies. 1 hit.; Heals all allies by 10% Health for each enemy hit.; Balanced Mask: Increased damage.",
    "ap": 6,
    "spCost": null,
    "prerequisite": "Contorsionniste"
  },
  {
    "character": "Monoco",
    "name": "Création Void",
    "description": "Deals extreme Void damage to random targets. 3 hits.; More damage if the same target is hit multiple times.; Caster Mask: Increased damage.",
    "ap": 9,
    "spCost": null,
    "prerequisite": "Création"
  },
  {
    "character": "Monoco",
    "name": "Cruler Barrier",
    "description": "Applies 1-2 Shields to the target.; Heavy Mask: Gives 2 AP to the target.",
    "ap": 4,
    "spCost": null,
    "prerequisite": "Cruler"
  },
  {
    "character": "Monoco",
    "name": "Cultist Blood",
    "description": "Deals medium Dark damage to all enemies. 3 hits.; Heavy Mask: Increased damage.",
    "ap": 3,
    "spCost": null,
    "prerequisite": "Greatsword Cultist"
  },
  {
    "character": "Monoco",
    "name": "Cultist Slashes",
    "description": "Deals medium single target Dark damage. 3 hits.; Deals more damage the less Health Monoco has.; Agile Mask: Increased damage.",
    "ap": 5,
    "spCost": null,
    "prerequisite": "Reaper Cultist"
  },
  {
    "character": "Monoco",
    "name": "Danseuse Waltz",
    "description": "Deals high single target Fire damage. 3 hits.; Deals more damage against Burning targets.; Balanced Mask: Increased damage.",
    "ap": 8,
    "spCost": null,
    "prerequisite": "Danseuse"
  },
  {
    "character": "Monoco",
    "name": "Démineur Thunder",
    "description": "Deals low single target Lightning damage. 1 hit.; Deals extra Break Damage ; Caster Mask: Increased Break damage.",
    "ap": 2,
    "spCost": null,
    "prerequisite": "Démineur"
  },
  {
    "character": "Monoco",
    "name": "Duallist Storm",
    "description": "Deals extreme single target Physical damage. 4 hits.; Can Break ; Almighty Mask: Increased damage.",
    "ap": 8,
    "spCost": null,
    "prerequisite": "Dualliste"
  },
  {
    "character": "Monoco",
    "name": "Échassier Stabs",
    "description": "Deals medium single target Physical damage. 2 hits.; Agile Mask: Increased damage",
    "ap": 4,
    "spCost": null,
    "prerequisite": "Échassier"
  },
  {
    "character": "Monoco",
    "name": "Évêque Spear",
    "description": "Deals high single target Earth damage and applies Powerless for 3 turns. 1 hit.; Heavy Mask: Increased damage.",
    "ap": 6,
    "spCost": null,
    "prerequisite": "Évêque"
  },
  {
    "character": "Monoco",
    "name": "Gault Fury",
    "description": "Deals low single target Physical damage. 4 hits.; Applies Mark; Balanced Mask: Increased damage.",
    "ap": 3,
    "spCost": null,
    "prerequisite": "Gault"
  },
  {
    "character": "Monoco",
    "name": "Glaise Earthquakes",
    "description": "Deals medium Earth damage to all enemies. 3 hits.; Applies Powerful to self.; Heavy Mask: applies Powerful to all allies.",
    "ap": 4,
    "spCost": null,
    "prerequisite": "Glaise"
  },
  {
    "character": "Monoco",
    "name": "Grosse Tête Whack",
    "description": "Deals high single target Physical damage. 5 hits.; Applies Defenceless for 3 turns.; Heavy Mask: Increased damage.",
    "ap": 6,
    "spCost": null,
    "prerequisite": "Grosse Tête"
  },
  {
    "character": "Monoco",
    "name": "Hexga Crush",
    "description": "Deals medium single target Earth damage. 2 hits.; Applies Defenceless to the target for 3 turns.; Heavy Mask: Increases Defenceless duration to 5 turns.",
    "ap": 5,
    "spCost": null,
    "prerequisite": "Hexga"
  },
  {
    "character": "Monoco",
    "name": "Jar Lampstorm",
    "description": "Deals medium Physical damage to all enemies. 4 hits.; Heavy Mask: Increased damage.",
    "ap": 5,
    "spCost": null,
    "prerequisite": "Jar"
  },
  {
    "character": "Monoco",
    "name": "Lampmaster Light",
    "description": "Deals high Light damage to all enemies. 1 hit.; Increased damage at each cast.; Almighty Mask: Increased damage.",
    "ap": 5,
    "spCost": null,
    "prerequisite": "Lampmaster"
  },
  {
    "character": "Monoco",
    "name": "Lancelier Impale",
    "description": "Deals low single target Ice damage. 1 hit.; Slows the target for 3 turns.; Agile Mask: Increased damage.",
    "ap": 2,
    "spCost": null,
    "prerequisite": "Lancelier"
  },
  {
    "character": "Monoco",
    "name": "Luster Slices",
    "description": "Deals low single target Physical damage. 3 hits.; Applies Rush to self for 3 turns.; Agile Mask: Increased damage.",
    "ap": 3,
    "spCost": null,
    "prerequisite": "Luster"
  },
  {
    "character": "Monoco",
    "name": "Mighty Strike",
    "description": "Deals high single target damage. 2 hits.; Uses weapon's element.; Deals double damage if the target is Stunned; Goes to Almighty Mask .",
    "ap": null,
    "spCost": null,
    "prerequisite": "Reach Relationship Level 3 with Monoco"
  },
  {
    "character": "Monoco",
    "name": "Moissonneuse Vendange",
    "description": "Deals High single target Physical damage. 3 hits.; Can Break ; Balanced Mask: Increased damage.",
    "ap": 5,
    "spCost": null,
    "prerequisite": "Moissonneuse"
  },
  {
    "character": "Monoco",
    "name": "Obscur Sword",
    "description": "Deals high single target Dark damage. 5 hits.; Deals more damage against Powerless targets.; Heavy Mask: Increased damage.",
    "ap": 6,
    "spCost": null,
    "prerequisite": "Obscur"
  },
  {
    "character": "Monoco",
    "name": "Orphelin Cheers",
    "description": "Applies Powerful to 1-3 allies.; Caster Mask: Also gives 3 AP to targets.",
    "ap": 3,
    "spCost": null,
    "prerequisite": "Orphelin"
  },
  {
    "character": "Monoco",
    "name": "Pèlerin Heal",
    "description": "Applies Regen to all allies.; Caster Mask: also Heals 40% Health.",
    "ap": 5,
    "spCost": null,
    "prerequisite": "Pèlerin"
  },
  {
    "character": "Monoco",
    "name": "Portier Crash",
    "description": "Deals high Physical damage to all enemies. 1 hit; Can Break ; Heavy Mask: Increased damage.",
    "ap": 8,
    "spCost": null,
    "prerequisite": "Portier"
  },
  {
    "character": "Monoco",
    "name": "Potier Energy",
    "description": "Gives 1-3 AP to all allies.; Caster Mask: Gives 1 additional AP",
    "ap": 4,
    "spCost": null,
    "prerequisite": "Potier"
  },
  {
    "character": "Monoco",
    "name": "Ramasseur Bonk",
    "description": "Deals low single target Dark damage. 1 hit.; Can Break ; Agile Mask: fills 20% of the target's Break Bar.",
    "ap": 2,
    "spCost": null,
    "prerequisite": "Ramasseur"
  },
  {
    "character": "Monoco",
    "name": "Rocher Hammering",
    "description": "Deals medium single target Physical damage. 4 hits.; Can Break ; Heavy Mask: Increased damage.",
    "ap": 3,
    "spCost": null,
    "prerequisite": "Rocher"
  },
  {
    "character": "Monoco",
    "name": "Sakapatate Estoc",
    "description": "Deals low single target Lightning damage. 1 hit.; Deals more damage if the target is Stunned; Balanced Mask: Increased damage.",
    "ap": 3,
    "spCost": null,
    "prerequisite": "Ranger Sakapatate"
  },
  {
    "character": "Monoco",
    "name": "Sakapatate Explosion",
    "description": "Deals medium Lightning damage to random enemies. 3 hits.; Critical Hits trigger an additional hit.; Caster Mask: Increased damage.",
    "ap": 4,
    "spCost": null,
    "prerequisite": "Catapult Sakapatate"
  },
  {
    "character": "Monoco",
    "name": "Sakapatate Fire",
    "description": "Deals extreme Fire to all enemies. 3 hits.; Apply 3 Burn per hit.; Almighty Mask: Increased damage.",
    "ap": 9,
    "spCost": null,
    "prerequisite": "Ultimate Sakapatate"
  },
  {
    "character": "Monoco",
    "name": "Sakapatate Slam",
    "description": "Deals high Physical damage to all enemies. 1 hit.; Increased damage to Marked targets.; Heavy Mask: Increased damage.",
    "ap": 7,
    "spCost": null,
    "prerequisite": "Robust Sakapatate"
  },
  {
    "character": "Monoco",
    "name": "Sanctuary",
    "description": "Gives 2 Shields and applies Regen to all allies for 3 turns.",
    "ap": null,
    "spCost": null,
    "prerequisite": "Reach Relationship Level 5 with Monoco"
  },
  {
    "character": "Monoco",
    "name": "Sapling Absorption",
    "description": "Deals high Dark damage. 3 hits.; Recovers 5% Health on hit.; Caster Mask: Increased damage and double Heal",
    "ap": 6,
    "spCost": null,
    "prerequisite": "Sapling"
  },
  {
    "character": "Monoco",
    "name": "Stalact Punches",
    "description": "Deals medium single target Ice damage. 4 hits.; High Break damage ; Heavy Mask: Increased damage.",
    "ap": 4,
    "spCost": null,
    "prerequisite": "Stalact"
  },
  {
    "character": "Monoco",
    "name": "Troubadour Trumpet",
    "description": "Applies a random buff to 1 to 3 allies.; Caster Mask: applies a second random buff.",
    "ap": 3,
    "spCost": null,
    "prerequisite": "Troubadour"
  },
  {
    "character": "Sciel",
    "name": "All Set",
    "description": "Applies Shell, Powerful, and Rush to all allies.",
    "ap": 6,
    "spCost": 6,
    "prerequisite": "Card Weaver"
  },
  {
    "character": "Sciel",
    "name": "Bad Omen",
    "description": "Deals low Dark damage to all enemies. 2 hits.; Applies 2 Foretell per hit.",
    "ap": 3,
    "spCost": 4,
    "prerequisite": "Marking Card"
  },
  {
    "character": "Sciel",
    "name": "Card Weaver",
    "description": "Deals low single target Physical damage. 1 hit.; Propagates target's Foretell to all enemies.; Plays a second turn.",
    "ap": 3,
    "spCost": 4,
    "prerequisite": "Dark Cleansing"
  },
  {
    "character": "Sciel",
    "name": "Dark Cleansing",
    "description": "Cleanses an ally of their Status Effects and propagates the target's buff to all allies.",
    "ap": 0,
    "spCost": 2,
    "prerequisite": "Spectral Sweep"
  },
  {
    "character": "Sciel",
    "name": "Dark Wave",
    "description": "Deals high Dark damage to all enemies. 3 hits.; Consumes all Foretell for increased damage.",
    "ap": 6,
    "spCost": 10,
    "prerequisite": "Grim Harvest"
  },
  {
    "character": "Sciel",
    "name": "Delaying Slash",
    "description": "Deals medium single target damage. 2 hits.; Uses weapon's element.; Consumes Foretell to increase damage and delay target's turn.",
    "ap": 5,
    "spCost": 6,
    "prerequisite": "Bad Omen"
  },
  {
    "character": "Sciel",
    "name": "Doom",
    "description": "Deals very high single target Dark damage. 3 hits.; Applies Powerless, Defenceless, and Slow for 3 turns.; Can Break",
    "ap": null,
    "spCost": null,
    "prerequisite": "Reach Relationship Level 5 with Sciel"
  },
  {
    "character": "Sciel",
    "name": "End Slice",
    "description": "Deals extrema single target Physical damage. 1 hit.; Damage is increased for each Foretell consumed since the beginning of the battle.",
    "ap": null,
    "spCost": null,
    "prerequisite": "Reach Relationship Level 7 (max) with Sciel"
  },
  {
    "character": "Sciel",
    "name": "Final Path",
    "description": "Deals extreme single target Dark damage and applies 10 Foretell 1 hit.; Can Break",
    "ap": 9,
    "spCost": 10,
    "prerequisite": "Plentiful Harvest"
  },
  {
    "character": "Sciel",
    "name": "Firing Shadow",
    "description": "Deals low Dark damage to all enemies. 3 hits.; Consumes 1 Foretell per hit for increased damage.",
    "ap": 3,
    "spCost": 2,
    "prerequisite": "Searing Bond"
  },
  {
    "character": "Sciel",
    "name": "Focused Foretell",
    "description": "Deals medium single target Physical damage. 1 hit.; Applies 2 Foretell ; Applies 3 additional Foretell if target has 0 Foretell",
    "ap": 2,
    "spCost": null,
    "prerequisite": null
  },
  {
    "character": "Sciel",
    "name": "Fortune's Fury",
    "description": "Target ally deals double damage for 1 turn.",
    "ap": 5,
    "spCost": 6,
    "prerequisite": "Firing Shadow"
  },
  {
    "character": "Sciel",
    "name": "Grim Harvest",
    "description": "Deals medium single target Dark damage. 1 hit.; Heals all allies by 30% Health.; Consumes Foretell to increase Heal by 5% per Foretell",
    "ap": 5,
    "spCost": 6,
    "prerequisite": "Sealed Fate"
  },
  {
    "character": "Sciel",
    "name": "Harvest",
    "description": "Deals medium single target damage. 1 hit. Uses weapon's element.; Heals self by 40% Health.; Consumes all Foretell to increase Heal by 5% per Foretell",
    "ap": 3,
    "spCost": 1,
    "prerequisite": "Twilight Slash"
  },
  {
    "character": "Sciel",
    "name": "Intervention",
    "description": "Targeted ally plays immediately and gains 4 AP",
    "ap": 5,
    "spCost": 6,
    "prerequisite": "Spectral Sweep"
  },
  {
    "character": "Sciel",
    "name": "Marking Card",
    "description": "Deals medium single target Dark damage. 2 hits.; Applies Mark to the target.; Applies 3 Foretell",
    "ap": 3,
    "spCost": 2,
    "prerequisite": "Focused Foretell"
  },
  {
    "character": "Sciel",
    "name": "Our Sacrifice",
    "description": "Deals extreme Dark damage to all enemies. 1 hit.; Absorbs allies' Health and enemies' Foretell to deal increased damage.",
    "ap": 4,
    "spCost": 8,
    "prerequisite": "Fortune's Fury"
  },
  {
    "character": "Sciel",
    "name": "Phantom Blade",
    "description": "Deals high single target Dark damage. 1 hit.; Consumes all Foretell to deal additional damage.; Can Break",
    "ap": 5,
    "spCost": 2,
    "prerequisite": "Twilight Slash"
  },
  {
    "character": "Sciel",
    "name": "Plentiful Harvest",
    "description": "Deals medium single target Physical damage. 2 hits.; Consumes all Foretell on a target and gives 1 AP to a party member for each Foretell consumed.",
    "ap": 4,
    "spCost": 4,
    "prerequisite": "Firing Shadow"
  },
  {
    "character": "Sciel",
    "name": "Rush",
    "description": "Applies Rush to 1-3 allies, increasing their speed for 3 turns.",
    "ap": 3,
    "spCost": 1,
    "prerequisite": "Focused Foretell"
  },
  {
    "character": "Sciel",
    "name": "Sealed Fate",
    "description": "Deals high single target damage. 5-7 hits. Uses weapon's element.; Each hit can consume 1 Foretell to deal 200% more damage.; Critical Hits don't remove the Foretell but still gets the damage increase.",
    "ap": 4,
    "spCost": 4,
    "prerequisite": "Phantom Blade"
  },
  {
    "character": "Sciel",
    "name": "Searing Bond",
    "description": "Deals medium single target Dark damage. 1 hit.; Applies 5 Foretell ; Also deals damage and applies Foretell to every other Burning enemies.",
    "ap": 4,
    "spCost": 2,
    "prerequisite": "Harvest"
  },
  {
    "character": "Sciel",
    "name": "Shadow Bringer",
    "description": "Deals high single target Dark damage to random enemies. 10 hits.; Applies 1 Foretell per hit.",
    "ap": null,
    "spCost": null,
    "prerequisite": "Reach Relationship Level 3 with Sciel"
  },
  {
    "character": "Sciel",
    "name": "Spectral Sweep",
    "description": "Deals medium single target damage. 2 to 6 hits.; Uses weapon's element.; Applies 1 Foretell per hit.; Critical Hits apply an additional Foretell",
    "ap": 7,
    "spCost": 2,
    "prerequisite": "Rush"
  },
  {
    "character": "Sciel",
    "name": "Twilight Dance",
    "description": "Deals extreme single target Dark damage. 4 hits; During Twilight , extends Twilight duration by 1 turn.; Consumes all Foretell to deal additional damage.",
    "ap": 9,
    "spCost": 10,
    "prerequisite": "Our Sacrifice"
  },
  {
    "character": "Sciel",
    "name": "Twilight Slash",
    "description": "Deals low single target Dark damage. 1 hit.; Consumes all Foretell to deal additional damage.",
    "ap": 2,
    "spCost": null,
    "prerequisite": null
  },
  {
    "character": "Verso",
    "name": "Angel's Eyes",
    "description": "Deals extreme Physical Damage. 8 hits.; Gain 1 additional Perfection per hit.; Applies Aureole to Verso, reviving him if he dies.",
    "ap": null,
    "spCost": null,
    "prerequisite": "Esquie"
  },
  {
    "character": "Verso",
    "name": "Ascending Assault",
    "description": "Deals low single target damage. 1 hit.; Uses weapon's element.; Increased damage at each cast.; : Costs 2 AP",
    "ap": 5,
    "spCost": 4,
    "prerequisite": "Blitz"
  },
  {
    "character": "Verso",
    "name": "Assault Zero",
    "description": "Deals low single target damage. 5 hits.; Uses weapon's element.; Critical Hits generate 1 additional Perfection ; : Increased damage.",
    "ap": 3,
    "spCost": null,
    "prerequisite": "_n/a_"
  },
  {
    "character": "Verso",
    "name": "Berserk Slash",
    "description": "Deals medium single target Physical damage. 3 hits.; Damage is increased for each Health Verso is missing.; : Increased damage.",
    "ap": 4,
    "spCost": 2,
    "prerequisite": "Quick Strike"
  },
  {
    "character": "Verso",
    "name": "Blitz",
    "description": "Deals low single target Physical damage. 1 hit.; Plays a second time. Kills non-boss enemies with less than 10% Health.; : Increased damage.",
    "ap": 3,
    "spCost": 2,
    "prerequisite": "Purification"
  },
  {
    "character": "Verso",
    "name": "Burden",
    "description": "Removes all Status Effects from all allies and applies them to Verso.; Gains 1 Rank.",
    "ap": 1,
    "spCost": 4,
    "prerequisite": "Berserk Slash"
  },
  {
    "character": "Verso",
    "name": "Defiant Strike",
    "description": "Deals high single target Physical damage that applies Mark 2 hits.; Costs 30% of current Health.; : Increased damage.",
    "ap": 3,
    "spCost": 6,
    "prerequisite": "Berserk Slash"
  },
  {
    "character": "Verso",
    "name": "End Bringer",
    "description": "Deals extreme single target Physical damage. 6 hits.; Increased damage if the target is Stunned; : Can reapply Stun",
    "ap": 9,
    "spCost": 10,
    "prerequisite": "Light Holder"
  },
  {
    "character": "Verso",
    "name": "Follow Up",
    "description": "Deals medium single target Light damage. 1 hit.; Damage increased for each Free Aim shot this turn, up to 10 times.; : Costs 2 AP",
    "ap": 5,
    "spCost": 4,
    "prerequisite": "Purification"
  },
  {
    "character": "Verso",
    "name": "From Fire",
    "description": "Deals medium single target damage. 3 hits.; Uses weapon's element.; Heals self by 20% Health if the target Burns; : Increased damage.",
    "ap": 4,
    "spCost": null,
    "prerequisite": "_n/a_"
  },
  {
    "character": "Verso",
    "name": "Leadership",
    "description": "Reduces current Rank.; Gives 2-4 AP to other allies.; : +1 more AP to other allies.",
    "ap": 3,
    "spCost": 4,
    "prerequisite": "Powerful"
  },
  {
    "character": "Verso",
    "name": "Light Holder",
    "description": "Medium single target Light damage. 5 hits.; At completion, gains 1 Rank.; : +2 AP",
    "ap": 4,
    "spCost": 6,
    "prerequisite": "Radiant Slash"
  },
  {
    "character": "Verso",
    "name": "Marking Shot",
    "description": "Deals low single target damage. 1 hit.; Uses weapon's element.; Applies Mark; : Increased damage.",
    "ap": 2,
    "spCost": 1,
    "prerequisite": "Assault Zero"
  },
  {
    "character": "Verso",
    "name": "Overload",
    "description": "Increases Rank to and refills all AP, but sets self-Health to 1.",
    "ap": 6,
    "spCost": 6,
    "prerequisite": "Follow Up"
  },
  {
    "character": "Verso",
    "name": "Paradigm Shift",
    "description": "Deals low Physical single target damage and gives 1-3 AP back. 3 hits.; : +1 AP",
    "ap": 1,
    "spCost": 2,
    "prerequisite": "Purification"
  },
  {
    "character": "Verso",
    "name": "Perfect Break",
    "description": "Deals very high single target Light damage. 1 hit.; Can Break ; Rank on Break ; : Costs 5 AP",
    "ap": 7,
    "spCost": 4,
    "prerequisite": "Blitz"
  },
  {
    "character": "Verso",
    "name": "Perfect Recovery",
    "description": "Recovers 50% Health and dispels Status Effects.; Gives 0-2 Perfection ; : Increased heal to 100% Health.",
    "ap": 3,
    "spCost": 1,
    "prerequisite": "From Fire"
  },
  {
    "character": "Verso",
    "name": "Phantom Stars",
    "description": "Deals extreme Light damage to all enemies. 5 hits.; Can Break ; : Costs 5 AP",
    "ap": 9,
    "spCost": 8,
    "prerequisite": "Leadership"
  },
  {
    "character": "Verso",
    "name": "Powerful",
    "description": "Applies Powerful to 1-3 allies, increasing damage they deal for 3 turns.; Gives 0-2 Perfection ; : Duration increased to 5 turns.",
    "ap": 3,
    "spCost": 2,
    "prerequisite": "Quick Strike"
  },
  {
    "character": "Verso",
    "name": "Purification",
    "description": "Deals single target medium Light damage. 2 hits.; Dispels self status effects.; : Increased damage.",
    "ap": 5,
    "spCost": 2,
    "prerequisite": "Perfect Recovery"
  },
  {
    "character": "Verso",
    "name": "Quick Strike",
    "description": "Deals low single target Physical damage. 1 hit.; : Gives more Perfection",
    "ap": 2,
    "spCost": 2,
    "prerequisite": "Marking Shot"
  },
  {
    "character": "Verso",
    "name": "Radiant Slash",
    "description": "Deals low Light damage to all enemies. 1 hit.; Can Break ; : Increased damage.",
    "ap": 2,
    "spCost": 4,
    "prerequisite": "Blitz"
  },
  {
    "character": "Verso",
    "name": "Sabotage",
    "description": "Deals medium Physical damage to all enemies. 1 hit.; Applies Mark",
    "ap": null,
    "spCost": null,
    "prerequisite": "Esquie"
  },
  {
    "character": "Verso",
    "name": "Speed Burst",
    "description": "Deals high single target Light damage. 5 hits.; Damage increased by Speed difference with the target.; : Increased damage",
    "ap": 6,
    "spCost": 6,
    "prerequisite": "Overload"
  },
  {
    "character": "Verso",
    "name": "Steeled Strike",
    "description": "After 1 turn, deals extreme single target Physical damage. 13 hits.; Interrupted if any damage taken.; : Increased damage.",
    "ap": 9,
    "spCost": 10,
    "prerequisite": "Strike Storm"
  },
  {
    "character": "Verso",
    "name": "Strike Storm",
    "description": "Deals very high single target damage. 5 hits.; Uses weapon's element.; Critical Hits generate 2 additional Perfection ; : Increased damage.",
    "ap": 7,
    "spCost": 8,
    "prerequisite": "Defiant Strike"
  },
  {
    "character": "Verso",
    "name": "Striker",
    "description": "Deals high single target Physical damage. 1 hit.; Can Break",
    "ap": null,
    "spCost": null,
    "prerequisite": "Esquie"
  }
];

export default skillsCatalog;
