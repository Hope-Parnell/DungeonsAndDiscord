const backgrounds = ['Acolyte', 'Charlatan', 'Criminal', 'Entertainer', 'Folk Hero', 'Gladiator', 'Guild Artisan', 'Hermit', 'Knight', 'Noble', 'Outlander', 'Pirate', 'Sage', 'Sailor', 'Soldier', 'Urchin'];
const races = ['Dragonborn', 'Dwarf', 'Elf', 'Gnome', 'Half-Elf', 'Halfling', 'Half-Orc', 'Human', 'Tiefling'];
class Barbarian {
  constructor () {
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
    raceStat();
  }
}

class Bard {
  constructor () {
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
    raceStat();
  }
}

class Cleric {
  constructor () {
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
    raceStat();
  }
}

class Druid {
  constructor () {
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
    raceStat();
  }
}

class Fighter {
  constructor () {
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
    raceStat();
  }
}

class Monk {
  constructor () {
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
    raceStat();
  }
}

class Paladin {
  constructor () {
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
    raceStat();
  }
}

class Ranger {
  constructor () {
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
    raceStat();
  }
}

class Rogue {
  constructor () {
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
    raceStat();
  }
}

class Sorcerer {
  constructor () {
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
    raceStat();
  }
}

class Warlock {
  constructor () {
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
    raceStat();
  }
}

class Wizard {
  constructor () {
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
    raceStat();
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
