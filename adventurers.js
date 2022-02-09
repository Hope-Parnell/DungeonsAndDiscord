const backgrounds = ['Acolyte', 'Charlatan', 'Criminal', 'Entertainer', 'Folk Hero', 'Gladiator', 'Guild Artisan', 'Hermit', 'Knight', 'Noble', 'Outlander', 'Pirate', 'Sage', 'Sailor', 'Soldier', 'Urchin'];
const races = ['Dragonborn', 'Dwarf', 'Elf', 'Gnome', 'Half-Elf', 'Halfling', 'Half-Orc', 'Human', 'Tiefling'];
class Barbarian {
  constructor () {
    this.className = 'Barbarian';
    this.background = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    this.race = races[Math.floor(Math.random() * races.length)];
    let stats = [rollStat(), rollStat(), rollStat(), rollStat(), rollStat(), rollStat()];
    stats = stats.sort((a, b) => { return b - a; });
    this.strength = stats[0];
    this.dexterity = stats[2];
    this.constitution = stats[1];
    this.intelligence = stats[5];
    this.wisdom = stats[4];
    this.charisma = stats[3];
    raceStat(this);
  }
}

class Bard {
  constructor () {
    this.className = 'Bard';
    this.background = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    this.race = races[Math.floor(Math.random() * races.length)];
    let stats = [rollStat(), rollStat(), rollStat(), rollStat(), rollStat(), rollStat()];
    stats = stats.sort((a, b) => { return b - a; });
    this.strength = stats[5];
    this.dexterity = stats[1];
    this.constitution = stats[2];
    this.intelligence = stats[3];
    this.wisdom = stats[4];
    this.charisma = stats[0];
    raceStat(this);
  }
}

class Cleric {
  constructor () {
    this.className = 'Cleric';
    this.background = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    this.race = races[Math.floor(Math.random() * races.length)];
    let stats = [rollStat(), rollStat(), rollStat(), rollStat(), rollStat(), rollStat()];
    stats = stats.sort((a, b) => { return b - a; });
    this.strength = stats[3];
    this.dexterity = stats[2];
    this.constitution = stats[1];
    this.intelligence = stats[4];
    this.wisdom = stats[0];
    this.charisma = stats[5];
    raceStat(this);
  }
}

class Druid {
  constructor () {
    this.className = 'Druid';
    this.background = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    this.race = races[Math.floor(Math.random() * races.length)];
    let stats = [rollStat(), rollStat(), rollStat(), rollStat(), rollStat(), rollStat()];
    stats = stats.sort((a, b) => { return b - a; });
    this.strength = stats[4];
    this.dexterity = stats[1];
    this.constitution = stats[2];
    this.intelligence = stats[3];
    this.wisdom = stats[0];
    this.charisma = stats[5];
    raceStat(this);
  }
}

class Fighter {
  constructor () {
    this.className = 'Fighter';
    this.background = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    this.race = races[Math.floor(Math.random() * races.length)];
    let stats = [rollStat(), rollStat(), rollStat(), rollStat(), rollStat(), rollStat()];
    stats = stats.sort((a, b) => { return b - a; });
    this.strength = stats[0];
    this.dexterity = stats[1];
    this.constitution = stats[2];
    this.intelligence = stats[5];
    this.wisdom = stats[3];
    this.charisma = stats[4];
    raceStat(this);
  }
}

class Monk {
  constructor () {
    this.className = 'Monk';
    this.background = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    this.race = races[Math.floor(Math.random() * races.length)];
    let stats = [rollStat(), rollStat(), rollStat(), rollStat(), rollStat(), rollStat()];
    stats = stats.sort((a, b) => { return b - a; });
    this.strength = stats[3];
    this.dexterity = stats[0];
    this.constitution = stats[2];
    this.intelligence = stats[4];
    this.wisdom = stats[1];
    this.charisma = stats[5];
    raceStat(this);
  }
}

class Paladin {
  constructor () {
    this.className = 'Paladin';
    this.background = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    this.race = races[Math.floor(Math.random() * races.length)];
    let stats = [rollStat(), rollStat(), rollStat(), rollStat(), rollStat(), rollStat()];
    stats = stats.sort((a, b) => { return b - a; });
    this.strength = stats[2];
    this.dexterity = stats[3];
    this.constitution = stats[0];
    this.intelligence = stats[5];
    this.wisdom = stats[4];
    this.charisma = stats[1];
    raceStat(this);
  }
}

class Ranger {
  constructor () {
    this.className = 'Ranger';
    this.background = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    this.race = races[Math.floor(Math.random() * races.length)];
    let stats = [rollStat(), rollStat(), rollStat(), rollStat(), rollStat(), rollStat()];
    stats = stats.sort((a, b) => { return b - a; });
    this.strength = stats[5];
    this.dexterity = stats[0];
    this.constitution = stats[2];
    this.intelligence = stats[4];
    this.wisdom = stats[1];
    this.charisma = stats[3];
    raceStat(this);
  }
}

class Rogue {
  constructor () {
    this.className = 'Rogue';
    this.background = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    this.race = races[Math.floor(Math.random() * races.length)];
    let stats = [rollStat(), rollStat(), rollStat(), rollStat(), rollStat(), rollStat()];
    stats = stats.sort((a, b) => { return b - a; });
    this.strength = stats[5];
    this.dexterity = stats[0];
    this.constitution = stats[3];
    this.intelligence = stats[2];
    this.wisdom = stats[4];
    this.charisma = stats[1];
    raceStat(this);
  }
}

class Sorcerer {
  constructor () {
    this.className = 'Sorcerer';
    this.background = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    this.race = races[Math.floor(Math.random() * races.length)];
    let stats = [rollStat(), rollStat(), rollStat(), rollStat(), rollStat(), rollStat()];
    stats = stats.sort((a, b) => { return b - a; });
    this.strength = stats[5];
    this.dexterity = stats[1];
    this.constitution = stats[2];
    this.intelligence = stats[4];
    this.wisdom = stats[3];
    this.charisma = stats[0];
    raceStat(this);
  }
}

class Warlock {
  constructor () {
    this.className = 'Warlock';
    this.background = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    this.race = races[Math.floor(Math.random() * races.length)];
    let stats = [rollStat(), rollStat(), rollStat(), rollStat(), rollStat(), rollStat()];
    stats = stats.sort((a, b) => { return b - a; });
    this.strength = stats[5];
    this.dexterity = stats[2];
    this.constitution = stats[1];
    this.intelligence = stats[3];
    this.wisdom = stats[4];
    this.charisma = stats[0];
    raceStat(this);
  }
}

class Wizard {
  constructor () {
    this.className = 'Wizard';
    this.background = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    this.race = races[Math.floor(Math.random() * races.length)];
    let stats = [rollStat(), rollStat(), rollStat(), rollStat(), rollStat(), rollStat()];
    stats = stats.sort((a, b) => { return b - a; });
    this.strength = stats[5];
    this.dexterity = stats[1];
    this.constitution = stats[2];
    this.intelligence = stats[0];
    this.wisdom = stats[3];
    this.charisma = stats[4];
    raceStat(this);
  }
}

exports.classes = [Barbarian, Bard, Cleric, Druid, Fighter, Monk, Paladin, Ranger, Rogue, Sorcerer, Warlock, Wizard];

function rollStat () {
  return Math.floor((Math.random() * 11) + 8);
}

function raceStat (adventurer) {
  switch (adventurer.race) {
    case 'Dragonborn':
      adventurer.strength += 2;
      adventurer.charisma += 1;
      break;
    case 'Dwarf':
      adventurer.constitution += 2;
      break;
    case 'Elf':
      adventurer.dexterity += 2;
      break;
    case 'Gnome':
      adventurer.intelligence += 2;
      break;
    case 'Half-Elf':
      adventurer.charisma += 2;
      adventurer.dexterity += 1;
      adventurer.constitution += 1;
      break;
    case 'Halfling':
      adventurer.dexterity += 2;
      break;
    case 'Half-Orc':
      adventurer.strength += 2;
      adventurer.constitution += 2;
      break;
    case 'Human':
      adventurer.strength += 1;
      adventurer.constitution += 1;
      adventurer.dexterity += 1;
      adventurer.intelligence += 1;
      adventurer.charisma += 1;
      adventurer.wisdom += 1;
      break;
    case 'Tiefling':
      adventurer.charisma += 2;
      adventurer.intelligence += 1;
      break;
  }
}
