// ========================================
// BTD Zenith - Complete Unit & Game Data
// Ball Tower Defense (Roblox)
// ========================================

const UNITS = [
  // ===== NORMIE =====
  { name: "Ball", rarity: "Normie", exclusive: false, gemValue: 0, coinValue: 0, demand: 1, damage: "25 → 100", range: "5 → 12", cooldown: "1 → 0.35", special: "", pros: "Starter unit", cons: "Outclassed by everything", tier: "D" },
  { name: "ElectricBall", rarity: "Normie", exclusive: false, gemValue: 0, coinValue: 0, demand: 1, damage: "20 → 15", range: "5", cooldown: "2.5 → 1.5", special: "Chain Lightning", pros: "Best Normie unit, great DPS for beginners", cons: "Low range", tier: "C" },
  { name: "FireBall", rarity: "Normie", exclusive: false, gemValue: 0, coinValue: 0, demand: 1, damage: "20 → 50", range: "5", cooldown: "1.5 → 0.5", special: "Burn DoT", pros: "Burn damage", cons: "Ineffective compared to other units", tier: "D" },
  { name: "IceBall", rarity: "Normie", exclusive: false, gemValue: 0, coinValue: 0, demand: 1, damage: "20 → 100", range: "5", cooldown: "1 → 0.7", special: "Slow", pros: "Slows enemies", cons: "Low stats overall", tier: "D" },
  { name: "PoisonBall", rarity: "Normie", exclusive: false, gemValue: 0, coinValue: 0, demand: 1, damage: "15 → 50", range: "5", cooldown: "2 → 1.5", special: "Poison DoT", pros: "Poison damage", cons: "Weakest Normie", tier: "D" },

  // ===== ODD =====
  { name: "Baby Ball", rarity: "Odd", exclusive: false, gemValue: 5, coinValue: 500, demand: 1, damage: "—", range: "—", cooldown: "—", special: "", pros: "Cheap", cons: "Very weak", tier: "D" },
  { name: "Ball2.0", rarity: "Odd", exclusive: false, gemValue: 5, coinValue: 500, demand: 1, damage: "8 → 512", range: "6", cooldown: "0.5", special: "", pros: "Cheap placement & upgrades", cons: "Bad DPS, very low range", tier: "D" },
  { name: "BeachBall", rarity: "Odd", exclusive: false, gemValue: 5, coinValue: 500, demand: 1, damage: "500 → 3K", range: "13", cooldown: "4 → 1.5", special: "", pros: "Best Odd unit, good single-target DPS", cons: "Needs 2 upgrades to work", tier: "C" },
  { name: "Grug", rarity: "Odd", exclusive: false, gemValue: 5, coinValue: 500, demand: 1, damage: "100 → 500", range: "15", cooldown: "12 → 8", special: "AoE", pros: "AoE, cheap", cons: "Garbage DPS", tier: "D" },
  { name: "OldBall", rarity: "Odd", exclusive: false, gemValue: 5, coinValue: 500, demand: 1, damage: "50 → 400", range: "6", cooldown: "2 → 1", special: "", pros: "Cheap", cons: "Bad DPS, very low range", tier: "D" },
  { name: "PoliceBall", rarity: "Odd", exclusive: false, gemValue: 5, coinValue: 500, demand: 1, damage: "50 → 700", range: "14 → 30", cooldown: "1.5 → 0.45", special: "Pierce", pros: "Solid DPS, good range, pierce", cons: "Still an Odd unit", tier: "D" },
  { name: "SurvivorBall", rarity: "Odd", exclusive: false, gemValue: 5, coinValue: 500, demand: 1, damage: "300 → 2.25K", range: "5", cooldown: "3 → 2", special: "", pros: "Okay DPS", cons: "Very low range", tier: "D" },

  // ===== RARE =====
  { name: "Backpacker", rarity: "Rare", exclusive: false, gemValue: 6, coinValue: 600, demand: 2, damage: "80 → 100", range: "10 → 17", cooldown: "1 → 0.5", special: "Pierce, Bullets: 1→7", pros: "Cheap pierce with decent DPS", cons: "Low damage per hit", tier: "C" },
  { name: "BoxerBall", rarity: "Rare", exclusive: false, gemValue: 2, coinValue: 200, demand: 1, damage: "25 → 600", range: "5", cooldown: "0.5 → 0.1", special: "Melee", pros: "High upgrades yield good damage", cons: "Limited range", tier: "D" },
  { name: "BuildersClubBall", rarity: "Rare", exclusive: false, gemValue: 8, coinValue: 800, demand: 2, damage: "50 → 600", range: "5 → 10", cooldown: "5 → 0.1", special: "Stall", pros: "Stalls enemies", cons: "Costly upgrades", tier: "C" },
  { name: "ChocolateBall", rarity: "Rare", exclusive: true, gemValue: 5, coinValue: 500, demand: 2, damage: "—", range: "—", cooldown: "—", special: "Event Exclusive", pros: "Collectible", cons: "Limited utility", tier: "D" },
  { name: "CoalBall", rarity: "Rare", exclusive: true, gemValue: 5, coinValue: 500, demand: 2, damage: "—", range: "—", cooldown: "—", special: "Event Exclusive", pros: "Collectible", cons: "Limited utility", tier: "D" },
  { name: "DaGrungy", rarity: "Rare", exclusive: false, gemValue: 5, coinValue: 500, demand: 2, damage: "—", range: "—", cooldown: "—", special: "Summoner, Farm", pros: "Great for summons and farming", cons: "Not strong DPS", tier: "C" },
  { name: "FlameBall", rarity: "Rare", exclusive: false, gemValue: 2, coinValue: 200, demand: 1, damage: "10 → 25", range: "10 → 22", cooldown: "2 → 1.25", special: "Burn, AoE", pros: "Good range with AoE damage", cons: "Low damage", tier: "D" },
  { name: "FrozenBall", rarity: "Rare", exclusive: false, gemValue: 5, coinValue: 500, demand: 2, damage: "10 → 30", range: "8", cooldown: "0.5 → 0.1", special: "Freeze/Slow", pros: "Good AoE slow", cons: "Low range", tier: "C" },
  { name: "GrassMan", rarity: "Rare", exclusive: false, gemValue: 1, coinValue: 100, demand: 1, damage: "—", range: "—", cooldown: "—", special: "AoE", pros: "Great AoE range", cons: "Low DPS", tier: "D" },
  { name: "JewelryBall", rarity: "Rare", exclusive: true, gemValue: 5, coinValue: 500, demand: 2, damage: "—", range: "—", cooldown: "—", special: "Farm", pros: "Income generation", cons: "Limited combat", tier: "C" },
  { name: "MilitaryBall", rarity: "Rare", exclusive: false, gemValue: 5, coinValue: 500, demand: 1, damage: "20 → 50", range: "10 → 25", cooldown: "0.75 → 0.01", special: "Pierce", pros: "Excellent damage among Rares", cons: "Expensive upgrades", tier: "C" },
  { name: "Monkey", rarity: "Rare", exclusive: false, gemValue: 6, coinValue: 600, demand: 1, damage: "75 → 130", range: "5", cooldown: "1 → 0.04", special: "", pros: "Fast attack speed", cons: "Low range, mediocre DPS", tier: "D" },
  { name: "Noob", rarity: "Rare", exclusive: false, gemValue: 6, coinValue: 600, demand: 1, damage: "150 → 2K", range: "4", cooldown: "2.5 → 1.25", special: "", pros: "Cheap and decent on placement", cons: "Low range", tier: "C" },
  { name: "PeasantBall", rarity: "Rare", exclusive: false, gemValue: 5, coinValue: 500, demand: 1, damage: "100 → 1.25K", range: "5", cooldown: "1.5", special: "Farm", pros: "Farm unit", cons: "Weakest farm", tier: "C" },
  { name: "RareGrug", rarity: "Rare", exclusive: true, gemValue: 5, coinValue: 500, demand: 2, damage: "—", range: "—", cooldown: "—", special: "AoE", pros: "Better than Odd Grug", cons: "Still mediocre", tier: "D" },
  { name: "RockBall", rarity: "Rare", exclusive: true, gemValue: 3, coinValue: 300, demand: 2, damage: "25 → 600", range: "5", cooldown: "0.5 → 0.1", special: "", pros: "One of the best Rare DPS units", cons: "Low range", tier: "C" },
  { name: "SkeleBall", rarity: "Rare", exclusive: true, gemValue: 5, coinValue: 500, demand: 2, damage: "100 → 1.3K", range: "5", cooldown: "1 → 0.25", special: "Event", pros: "Decent DPS", cons: "Low range", tier: "C" },
  { name: "Slinger", rarity: "Rare", exclusive: false, gemValue: 3, coinValue: 300, demand: 2, damage: "90 → 5K", range: "15", cooldown: "0.5 → 0.4", special: "", pros: "Best Rare DPS when maxed", cons: "Bad on placement", tier: "C" },
  { name: "SniperBall", rarity: "Rare", exclusive: false, gemValue: 5, coinValue: 500, demand: 1, damage: "250 → 4K", range: "20 → 40", cooldown: "4 → 3", special: "Pierce: 3", pros: "Great range and damage", cons: "Slow, expensive upgrades", tier: "D" },
  { name: "SnowBall", rarity: "Rare", exclusive: true, gemValue: 5, coinValue: 500, demand: 2, damage: "—", range: "—", cooldown: "—", special: "Slow", pros: "Slowing utility", cons: "Event limited", tier: "C" },

  // ===== AWESOME =====
  { name: "AdBall", rarity: "Awesome", exclusive: true, gemValue: 15, coinValue: 1500, demand: 2, damage: "—", range: "—", cooldown: "—", special: "Watch-ad reward", pros: "Free to obtain", cons: "Limited stats", tier: "C" },
  { name: "AwesomeGrug", rarity: "Awesome", exclusive: true, gemValue: 15, coinValue: 1500, demand: 2, damage: "—", range: "—", cooldown: "—", special: "AoE", pros: "Better Grug variant", cons: "Still limited", tier: "C" },
  { name: "BombBall", rarity: "Awesome", exclusive: false, gemValue: 14, coinValue: 1400, demand: 1, damage: "500 → 400", range: "10 → 60", cooldown: "20 → 15", special: "Traps", pros: "Trap placement", cons: "Bad DPS, worst Awesome unit", tier: "C" },
  { name: "BubbleBall", rarity: "Awesome", exclusive: true, gemValue: 15, coinValue: 1500, demand: 2, damage: "—", range: "—", cooldown: "—", special: "", pros: "Unique mechanics", cons: "Niche", tier: "C" },
  { name: "DemonBall", rarity: "Awesome", exclusive: false, gemValue: 11, coinValue: 1100, demand: 1, damage: "200 → 600", range: "10", cooldown: "2 → 1.5", special: "Burn DoT", pros: "Burn damage, outranks Rares", cons: "Low range, expensive", tier: "C" },
  { name: "FancyBall", rarity: "Awesome", exclusive: false, gemValue: 18, coinValue: 1800, demand: 3, damage: "—", range: "5", cooldown: "1.5", special: "Farm: 2K→15K income", pros: "Good money-making", cons: "No damage", tier: "B" },
  { name: "FossilBall", rarity: "Awesome", exclusive: true, gemValue: 15, coinValue: 1500, demand: 2, damage: "—", range: "—", cooldown: "—", special: "", pros: "Collectible", cons: "Limited", tier: "C" },
  { name: "FrostyBall", rarity: "Awesome", exclusive: true, gemValue: 25, coinValue: 2500, demand: 3, damage: "1K → 10K", range: "13", cooldown: "1.35 → 1", special: "Slow, Pierce 2→8", pros: "Very good DPS, slow", cons: "Mediocre range", tier: "B" },
  { name: "HeartBall", rarity: "Awesome", exclusive: true, gemValue: 15, coinValue: 1500, demand: 2, damage: "—", range: "—", cooldown: "—", special: "Event", pros: "Event collectible", cons: "Limited", tier: "C" },
  { name: "HoloBall", rarity: "Awesome", exclusive: true, gemValue: 15, coinValue: 1500, demand: 2, damage: "—", range: "—", cooldown: "—", special: "", pros: "Unique design", cons: "Limited", tier: "C" },
  { name: "Knight", rarity: "Awesome", exclusive: false, gemValue: 14, coinValue: 1400, demand: 2, damage: "300 → 2K", range: "5 → 12", cooldown: "1.5 → 0.3", special: "", pros: "Cheap, good DPS maxed out", cons: "Low range", tier: "B" },
  { name: "LaserBall", rarity: "Awesome", exclusive: false, gemValue: 11, coinValue: 1100, demand: 3, damage: "90 → 400", range: "15", cooldown: "0.5 → 0.08", special: "Pierce: 10", pros: "Insane DPS, meta Awesome DPS", cons: "Expensive upgrades", tier: "B" },
  { name: "MinerBall", rarity: "Awesome", exclusive: true, gemValue: 14, coinValue: 1400, demand: 3, damage: "150 → 6K", range: "5", cooldown: "0.5 → 0.1", special: "", pros: "Insane DPS, good on placement", cons: "Very low range", tier: "B" },
  { name: "PowerArmorBall", rarity: "Awesome", exclusive: false, gemValue: 10, coinValue: 1000, demand: 2, damage: "1.5K → 50K", range: "6 → 7", cooldown: "3 → 1.75", special: "", pros: "Very good DPS", cons: "Very low range, expensive", tier: "B" },
  { name: "PresentBall", rarity: "Awesome", exclusive: true, gemValue: 18, coinValue: 1800, demand: 3, damage: "—", range: "5", cooldown: "1.5", special: "Farm: 3K→18K income", pros: "Good money-making", cons: "No damage, event limited", tier: "B" },
  { name: "RoseBall", rarity: "Awesome", exclusive: true, gemValue: 15, coinValue: 1500, demand: 2, damage: "—", range: "—", cooldown: "—", special: "Event", pros: "Event collectible", cons: "Limited", tier: "C" },
  { name: "ScarecrowBall", rarity: "Awesome", exclusive: true, gemValue: 18, coinValue: 1800, demand: 3, damage: "2K → 12K", range: "6 → 12", cooldown: "2 → 1", special: "AoE", pros: "Good AoE, very good DPS", cons: "Mediocre range", tier: "B" },
  { name: "Skateboarder", rarity: "Awesome", exclusive: false, gemValue: 20, coinValue: 2000, demand: 2, damage: "20 → 300", range: "5", cooldown: "1 → 0.8", special: "Summons, Sp. CD: 10→0.75", pros: "Summons, cheap, AoE", cons: "Low DPS, very low range", tier: "C" },
  { name: "VenomousBall", rarity: "Awesome", exclusive: false, gemValue: 10, coinValue: 1000, demand: 1, damage: "15", range: "5", cooldown: "0.5 → 0.03", special: "Poison DoT", pros: "Good DPS through poison", cons: "Very low range", tier: "C" },

  // ===== LEGENDARY =====
  { name: "AngelBall", rarity: "Legendary", exclusive: false, gemValue: 500, coinValue: 50000, demand: 4, damage: "2K → 325K", range: "6", cooldown: "3 → 2", special: "Boss Killer", pros: "Great single-target damage, boss killer", cons: "Expensive upgrades, very low range", tier: "A" },
  { name: "BunnyBall", rarity: "Legendary", exclusive: true, gemValue: 300, coinValue: 30000, demand: 4, damage: "—", range: "—", cooldown: "—", special: "Event", pros: "Event exclusive", cons: "Limited availability", tier: "B" },
  { name: "Chef", rarity: "Legendary", exclusive: false, gemValue: 50, coinValue: 5000, demand: 4, damage: "—", range: "5", cooldown: "1.5", special: "Farm: 2K→45K, +Base HP", pros: "Farms money, increases base HP", cons: "No damage", tier: "B" },
  { name: "Crusher", rarity: "Legendary", exclusive: true, gemValue: 500, coinValue: 50000, demand: 7, damage: "20K → 120K", range: "5 → 9", cooldown: "1.5 → 1", special: "AoE", pros: "Great damage and low cooldown", cons: "Low range", tier: "A" },
  { name: "CrusherBall", rarity: "Legendary", exclusive: true, gemValue: 50, coinValue: 5000, demand: 4, damage: "500 → 35K", range: "15 → 23", cooldown: "3 → 2.5", special: "", pros: "Decent range", cons: "Not great cooldown", tier: "B" },
  { name: "DartMonkey", rarity: "Legendary", exclusive: false, gemValue: 20, coinValue: 2000, demand: 3, damage: "—", range: "—", cooldown: "—", special: "Pierce", pros: "Decent DPS", cons: "Outclassed by others", tier: "B" },
  { name: "DruidBall", rarity: "Legendary", exclusive: false, gemValue: 300, coinValue: 30000, demand: 5, damage: "—", range: "—", cooldown: "—", special: "DoT, Nature", pros: "Decent DoT and DPS", cons: "Mid legendary", tier: "A" },
  { name: "ElfCommander", rarity: "Legendary", exclusive: true, gemValue: 300, coinValue: 30000, demand: 4, damage: "—", range: "—", cooldown: "—", special: "Summons", pros: "Best summoning in A-Tier", cons: "Weaker than top legendaries", tier: "A" },
  { name: "FireworkBall", rarity: "Legendary", exclusive: false, gemValue: 800, coinValue: 80000, demand: 6, damage: "500 → 75K", range: "Infinite", cooldown: "1.5", special: "Infinite Range", pros: "Infinite range!", cons: "Only great when upgraded", tier: "S" },
  { name: "GiantBall", rarity: "Legendary", exclusive: false, gemValue: 180, coinValue: 18000, demand: 2, damage: "—", range: "—", cooldown: "—", special: "AoE", pros: "Best AoE range among Legendaries", cons: "Weaker legendary option", tier: "A" },
  { name: "LegendaryGrug", rarity: "Legendary", exclusive: true, gemValue: 200, coinValue: 20000, demand: 3, damage: "—", range: "—", cooldown: "—", special: "AoE", pros: "Better Grug variant", cons: "Still niche", tier: "B" },
  { name: "MiniBaller", rarity: "Legendary", exclusive: false, gemValue: 50, coinValue: 5000, demand: 7, damage: "—", range: "—", cooldown: "—", special: "Pierce, DPS", pros: "Single-target DPS powerhouse", cons: "Placement matters", tier: "A" },
  { name: "PaintBaller", rarity: "Legendary", exclusive: true, gemValue: 200, coinValue: 20000, demand: 4, damage: "—", range: "—", cooldown: "—", special: "", pros: "Unique mechanics", cons: "Limited", tier: "B" },
  { name: "PartyMan", rarity: "Legendary", exclusive: false, gemValue: 150, coinValue: 15000, demand: 7, damage: "—", range: "8 → 13", cooldown: "5 → 2", special: "Buff: +50% ally range & dmg", pros: "Great support, buffs allies", cons: "No damage", tier: "S" },
  { name: "Piercer", rarity: "Legendary", exclusive: true, gemValue: 300, coinValue: 30000, demand: 6, damage: "—", range: "—", cooldown: "—", special: "Pierce", pros: "Single-target DPS with piercing", cons: "Placement dependent", tier: "A" },
  { name: "PrincessBall", rarity: "Legendary", exclusive: false, gemValue: 150, coinValue: 15000, demand: 5, damage: "—", range: "—", cooldown: "—", special: "Support", pros: "Good support", cons: "Mid tier", tier: "A" },
  { name: "RailgunBall", rarity: "Legendary", exclusive: true, gemValue: 300, coinValue: 30000, demand: 5, damage: "—", range: "—", cooldown: "—", special: "Long Range DPS", pros: "Great range and damage", cons: "Slow fire rate", tier: "A" },
  { name: "RoboBall", rarity: "Legendary", exclusive: false, gemValue: 75, coinValue: 7500, demand: 6, damage: "250 → 2.25K", range: "15 → 55", cooldown: "1 → 0.08", special: "Pierce: 2", pros: "Great range and low cooldown", cons: "Low damage", tier: "B" },
  { name: "SleepyBall", rarity: "Legendary", exclusive: true, gemValue: 200, coinValue: 20000, demand: 4, damage: "—", range: "—", cooldown: "—", special: "Stun/Crowd Control", pros: "Crowd control", cons: "Low DPS", tier: "B" },
  { name: "Slicer", rarity: "Legendary", exclusive: true, gemValue: 300, coinValue: 30000, demand: 7, damage: "—", range: "—", cooldown: "—", special: "DPS", pros: "Best Legendary DPS", cons: "Limited availability", tier: "A" },
  { name: "StatueBall", rarity: "Legendary", exclusive: true, gemValue: 200, coinValue: 20000, demand: 4, damage: "—", range: "—", cooldown: "—", special: "Support", pros: "Support utility", cons: "Niche", tier: "B" },
  { name: "SubZeroBall", rarity: "Legendary", exclusive: false, gemValue: 50, coinValue: 5000, demand: 4, damage: "—", range: "—", cooldown: "—", special: "Freeze", pros: "Crowd control freeze", cons: "Low DPS", tier: "B" },
  { name: "TurkeyBall", rarity: "Legendary", exclusive: true, gemValue: 1500, coinValue: 150000, demand: 7, damage: "—", range: "—", cooldown: "—", special: "Event, DPS", pros: "High value, great DPS", cons: "Very rare", tier: "S" },

  // ===== MYTHIC =====
  { name: "AutumnBall", rarity: "Mythic", exclusive: true, gemValue: 40000, coinValue: 4000000, demand: 5, damage: "1K → 500K", range: "5", cooldown: "2 → 1", special: "Boss Killer", pros: "Very good single-target damage, boss killer", cons: "Very low range", tier: "S" },
  { name: "Baller", rarity: "Mythic", exclusive: true, gemValue: 350000, coinValue: 35000000, demand: 8, damage: "10K → 250K", range: "14 → 20", cooldown: "5 → 1.25", special: "Bouncing: 10→150", pros: "Bouncing attack, extremely high DPS, meta", cons: "Only great when upgraded", tier: "S" },
  { name: "BloxxerBall", rarity: "Mythic", exclusive: true, gemValue: 20000, coinValue: 2000000, demand: 5, damage: "—", range: "—", cooldown: "—", special: "", pros: "Unique mechanics", cons: "Limited info", tier: "A" },
  { name: "Boulder", rarity: "Mythic", exclusive: false, gemValue: 45000, coinValue: 4500000, demand: 7, damage: "1K → 100K", range: "80", cooldown: "5 → 1.6", special: "Line Attack, AoE", pros: "Massive AoE, meta Mythic AoE", cons: "Blocks placement near it", tier: "S" },
  { name: "BrainBall", rarity: "Mythic", exclusive: false, gemValue: 3000, coinValue: 300000, demand: 4, damage: "—", range: "15 → 35", cooldown: "1.5 → 0.25", special: "Summon, HP: 0.35x→1x", pros: "Summon unit", cons: "Weakest Mythic", tier: "A" },
  { name: "CyborgBall", rarity: "Mythic", exclusive: true, gemValue: 25000, coinValue: 2500000, demand: 6, damage: "—", range: "—", cooldown: "—", special: "Tech", pros: "Strong tech-based unit", cons: "Limited info", tier: "A" },
  { name: "FrostAngel", rarity: "Mythic", exclusive: true, gemValue: 15000, coinValue: 1500000, demand: 5, damage: "15K → 400K", range: "13", cooldown: "0.75 → 0.6", special: "Slow, Dual Attack", pros: "Insane single-target DPS, slow, meta", cons: "Mediocre range", tier: "S" },
  { name: "GoldenMonkey", rarity: "Mythic", exclusive: false, gemValue: 6000, coinValue: 600000, demand: 8, damage: "400 → 1.5K", range: "6", cooldown: "0.25 → 0.18", special: "Farm: 50→750 money/hit", pros: "Meta farm unit, must-use", cons: "None", tier: "S" },
  { name: "GoldenMonkeyKing", rarity: "Mythic", exclusive: true, gemValue: 50000, coinValue: 5000000, demand: 7, damage: "—", range: "—", cooldown: "—", special: "Farm + DPS", pros: "Evolved Golden Monkey", cons: "Hard to obtain", tier: "S" },
  { name: "KingBall", rarity: "Mythic", exclusive: true, gemValue: 20000, coinValue: 2000000, demand: 6, damage: "5K → 300K", range: "8 → 10", cooldown: "1", special: "Summons, Sp. CD: 40→10", pros: "Summons units, AoE, meta", cons: "Low range", tier: "S" },
  { name: "NatureBall", rarity: "Mythic", exclusive: true, gemValue: 15000, coinValue: 1500000, demand: 6, damage: "2K → 160K", range: "10", cooldown: "1.5 → 1", special: "Puddles: slow + DPS", pros: "Great damage, meta support Mythic", cons: "Low range", tier: "S" },
  { name: "RichBall", rarity: "Mythic", exclusive: true, gemValue: 30000, coinValue: 3000000, demand: 6, damage: "—", range: "—", cooldown: "—", special: "Evolution: Farm", pros: "Evolved from FancyBall + materials", cons: "Hard to obtain", tier: "A" },
  { name: "SantaBall", rarity: "Mythic", exclusive: true, gemValue: 5000, coinValue: 500000, demand: 4, damage: "5K → 100K", range: "10", cooldown: "0.2", special: "Pierce: 1", pros: "Good damage when maxed, low cooldown", cons: "Low range", tier: "A" },
  { name: "Scrooge", rarity: "Mythic", exclusive: true, gemValue: 20000, coinValue: 2000000, demand: 5, damage: "—", range: "—", cooldown: "—", special: "Farm", pros: "Great farming", cons: "Event limited", tier: "A" },
  { name: "SnowBaller", rarity: "Mythic", exclusive: true, gemValue: 2000000, coinValue: 200000000, demand: 10, damage: "50 → 650K", range: "14", cooldown: "0.5 → 0.1", special: "Broken single-target DPS", pros: "Meta boss DPS, broken DPS, solid range", cons: "Extremely rare", tier: "SSS" },
  { name: "VirusBall", rarity: "Mythic", exclusive: false, gemValue: 3000, coinValue: 300000, demand: 5, damage: "250 → 10K", range: "5 → 12", cooldown: "0.7 → 0.4", special: "Virus DoT (spreading)", pros: "Cheap, spreading virus, good scaling", cons: "Low initial range", tier: "S" },

  // ===== TRANSCENDENT =====
  { name: "BlizzardBall", rarity: "Transcendent", exclusive: false, gemValue: 320000, coinValue: 32000000, demand: 8, damage: "—", range: "—", cooldown: "—", special: "Freeze AoE, CC", pros: "Great crowd control, massive stats", cons: "Weaker for a Transcendent", tier: "S" },
  { name: "JesterBall", rarity: "Transcendent", exclusive: false, gemValue: 220000, coinValue: 22000000, demand: 7, damage: "AoE: 250→150K / Melee: 10K→800K", range: "6", cooldown: "1 → 2", special: "Dual damage", pros: "Great AoE and melee damage", cons: "Low range", tier: "S" },
  { name: "LaserMiniGunner", rarity: "Transcendent", exclusive: false, gemValue: 700000, coinValue: 70000000, demand: 9, damage: "—", range: "—", cooldown: "—", special: "Extreme DPS", pros: "Best Transcendent, incredible carry potential", cons: "Was nerfed slightly", tier: "SSS" },
  { name: "Meteor", rarity: "Transcendent", exclusive: true, gemValue: 400000, coinValue: 40000000, demand: 7, damage: "—", range: "—", cooldown: "—", special: "AoE Bombardment", pros: "Massive AoE damage", cons: "Limited info", tier: "S" },
  { name: "PlasmaBall", rarity: "Transcendent", exclusive: true, gemValue: 350000, coinValue: 35000000, demand: 7, damage: "—", range: "—", cooldown: "—", special: "Energy DPS", pros: "Great energy-based DPS", cons: "Limited info", tier: "S" },
  { name: "RoboSanta", rarity: "Transcendent", exclusive: true, gemValue: 500000, coinValue: 50000000, demand: 7, damage: "—", range: "—", cooldown: "—", special: "Tech + Holiday", pros: "Incredible for rarity, meta", cons: "Event limited", tier: "SSS" },
  { name: "ShowmanBall", rarity: "Transcendent", exclusive: true, gemValue: 300000, coinValue: 30000000, demand: 7, damage: "—", range: "—", cooldown: "—", special: "Support + DPS", pros: "Good hybrid support", cons: "Limited info", tier: "S" },

  // ===== OMEGA =====
  { name: "ForestBall", rarity: "Omega", exclusive: false, gemValue: 2200000, coinValue: 220000000, demand: 8, damage: "—", range: "—", cooldown: "—", special: "Damage + CC", pros: "Ton of damage and CC", cons: "None significant", tier: "SSS" },
  { name: "GolemBall", rarity: "Omega", exclusive: true, gemValue: 2600000, coinValue: 260000000, demand: 10, damage: "—", range: "—", cooldown: "—", special: "Melee + AoE DPS", pros: "Strongest unit in game, meta, incredible melee", cons: "Omega Exclusive", tier: "SSS" },
  { name: "MechaBall", rarity: "Omega", exclusive: false, gemValue: 1200000, coinValue: 120000000, demand: 10, damage: "1K → 8K", range: "40 → 80", cooldown: "0.1 → 0.01", special: "Missiles: 10K→3M dmg, CD: 30→15", pros: "Great DPS, easy to max, meta", cons: "None", tier: "SSS" },
  { name: "OmegaKnight", rarity: "Omega", exclusive: true, gemValue: 1900000, coinValue: 190000000, demand: 8, damage: "10K → 750K", range: "15", cooldown: "6 → 0.75", special: "Highest AoE in game", pros: "Great DPS and AoE, best AoE", cons: "Limited range", tier: "SSS" },
  { name: "TheFrozenOne", rarity: "Omega", exclusive: false, gemValue: 2000000, coinValue: 200000000, demand: 8, damage: "—", range: "—", cooldown: "—", special: "CC + Damage", pros: "Incredible crowd-control and utility", cons: "Lower DPS than other Omegas", tier: "SSS" },
  { name: "VoidBall", rarity: "Omega", exclusive: false, gemValue: 1000000, coinValue: 100000000, demand: 9, damage: "75K → 2.5M", range: "50 → 200", cooldown: "3", special: "Pierce: 1", pros: "Huge range, insane damage", cons: "Expensive to upgrade", tier: "SSS" },
];

const FORGE_BUFFS = [
  { name: "Strength", chance: "15.8%", effect: "x1.4 Damage Multiplier 💪", desc: "Enlarger thy muscles, to gain small damage." },
  { name: "Crone's Eye", chance: "14.2%", effect: "x1.75 Range · x1.5 Cooldown 👓", desc: "When you get old, u get slower, yet you see further." },
  { name: "Sizeup2X", chance: "11%", effect: "x3 Size · x2 Damage 📦", desc: "You have more damage... But you are bigger... Win?" },
  { name: "Sizeup", chance: "11%", effect: "x2 Size · x1.75 Damage 📦", desc: "You have more damage... But you are bigger... Win?" },
  { name: "Reflexes", chance: "11%", effect: "x0.8 Cooldown ⚡", desc: "You keen your senses and react quicker." },
  { name: "Ranger", chance: "6.3%", effect: "x0.8 CD · x0.9 Dmg · x1.4 Range 🔫", desc: "Reach out and hit the things further." },
  { name: "Money Printer", chance: "6.3%", effect: "More money on enemy death 🖨️", desc: "When this tower kills an enemy, it prints out more cash!" },
  { name: "Lightning", chance: "6.3%", effect: "x0.65 CD · x0.8 Range · x0.8 Size ⚡", desc: "Lightning courses through your veins." },
  { name: "Binoculars", chance: "4.7%", effect: "x1.75 Range 👓", desc: "Fixes all the issues with the old corney." },
  { name: "Party Hat", chance: "3.1%", effect: "Extra PartyMan buff stack 🎉", desc: "Adds another stack of Partyman's buffs!" },
  { name: "Melee", chance: "3.1%", effect: "x0.9 CD · x2 Dmg · x0.5 Range · x2 Size ⚔️", desc: "Become one with the hitting things physically." },
  { name: "Explody", chance: "3.1%", effect: "Enemies explode on kill, dealing AoE 💥", desc: "When this tower kills an enemy, they explode!" },
  { name: "Money Bags", chance: "1.5%", effect: "x1.3 All Income 💰", desc: "Your money moneyes more money." },
  { name: "Divine", chance: "1.5%", effect: "x0.85 CD · x1.15 All Stats · x2 Size ✨", desc: "Pray for faith to enlighten your path." },
  { name: "Cool", chance: "0.1%", effect: "Nothing 🕶️", desc: "You are cool now, does nothing... But it's cool." },
  { name: "Shiny", chance: "Very Rare (on obtain)", effect: "x1.5 Damage, changes appearance ✨", desc: "A well oiled machine, rarely given upon creation." },
];

const MATERIALS = [
  { name: "Rock", source: "Endless mode on IsleOfBalls, ForestMap, MountainMap, GoldenCastle, Skybound Isles, HoloPlains", chance: "20% per wave" },
  { name: "Crooked Twig", source: "Endless mode on TheHallows", chance: "50% per wave" },
  { name: "Scribble", source: "Endless mode on Doodle", chance: "—" },
  { name: "Gold", source: "Endless mode on GoldenCastle and MountainMap", chance: "0.3% per wave" },
  { name: "Pumpkin", source: "Endless mode on TheHallows", chance: "—" },
  { name: "Magnum Opus", source: "Endless mode on Doodle", chance: "0.1% per wave" },
  { name: "Molten Core", source: "Endless mode on InfernoAbyss", chance: "—" },
  { name: "Obsidian", source: "Endless mode on InfernoAbyss", chance: "—" },
];

const GAMEPASS_VALUES = [
  { name: "VIP", gemValue: "70K Gems" },
  { name: "More Gems", gemValue: "40K Gems" },
  { name: "4x Speed", gemValue: "25K Gems" },
  { name: "3x Speed", gemValue: "10K Gems" },
];

const RARITY_ORDER = ["Normie", "Odd", "Rare", "Awesome", "Legendary", "Mythic", "Transcendent", "Omega"];

const TIER_ORDER = ["SSS", "SS", "S", "A", "B", "C", "D"];

function getUnitsByRarity(rarity) {
  return UNITS.filter(u => u.rarity === rarity);
}

function getUnitByName(name) {
  return UNITS.find(u => u.name.toLowerCase() === name.toLowerCase());
}

function searchUnits(query) {
  const q = query.toLowerCase();
  return UNITS.filter(u =>
    u.name.toLowerCase().includes(q) ||
    u.rarity.toLowerCase().includes(q) ||
    u.special.toLowerCase().includes(q)
  );
}

function formatValue(val) {
  if (val >= 1000000) return (val / 1000000).toFixed(1) + "M";
  if (val >= 1000) return (val / 1000).toFixed(0) + "K";
  return val.toString();
}
