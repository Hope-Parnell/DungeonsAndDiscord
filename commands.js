const { MessageEmbed } = require('discord.js');

exports.lol = (msg, ...args) => {
  msg.reply('You\'re so funny');
};

exports.roll = (msg, ...args) => {
  let total = 0;
  let input;
  const rolls = [];
  for (let i = 0; i < args.length; i += 2) {
    let n = 0;
    input = args[i];
    if (input.includes('d')) {
      const dice = input.split('d');
      if (Number(dice[0]) < 1) {
        msg.reply(`Invalid input: ${args[i]}: Number of dice must be a positive number.
        Example: 2d10`);
        return;
      }
      if (Number(dice[1]) < 1) {
        msg.reply(`Invalid input: ${args[i]}: Number of sides must be a positive number.
        Example: 2d10`);
        return;
      }
      for (let j = 0; j < Number(dice[0]); j++) {
        const roll = Math.floor((Math.random() * Number(dice[1]) + 1));
        rolls.push(roll);
        n += roll;
      }
    } else {
      n = Number(input);
      if (!n) {
        msg.reply(`Invalid input: ${args[i]}`);
        return;
      }
    }
    if (i === 0 || args[i - 1] === '+') {
      total += n;
    } else if (args[i - 1] === '-') {
      total -= n;
    } else {
      msg.reply(`Invalid operator [${args[i - 1]}]: Can only add or subtract.`);
      return;
    }
  }
  msg.reply(`Your total is ${total.toString()}
  Rolls: ${rolls.join(', ')}`);
};

exports.hero = (msg, args) => {
  const classes = require('./adventurers').classes;
  const hero = new classes[Math.floor((Math.random() * classes.length))]();
  const heroEmbed = new MessageEmbed()
    .setTitle('Your Adventerer')
    .setColor('#C284FF')
    .addfeilds(
      { name: 'class', value: typeof hero, inline: true },
      { name: 'race', value: hero.race, inline: true },
      {
        name: 'stats',
        value: `Strength: ${hero.strength}
        Dexterity: ${hero.dexterity}
        Constitution: ${hero.constitution}
        Intelligence: ${hero.intelligence}
        Wisdom: ${hero.wisdom}
        Charisma: ${hero.charisma}`,
        inline: false
      }
    );
  if (hero) {
    msg.reply({ embeds: heroEmbed });
  } else {
    msg.reply('Failed To Create Hero');
  }
};
