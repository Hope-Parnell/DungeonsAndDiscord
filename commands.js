exports.lol = (msg, ...args) => {
  msg.reply('You\'re so funny!');
};

exports.roll = (msg, ...args) => {
  let total = 0;
  let input;
  let roll;
  const rolls = [];
  if (args.length === 0) {
    roll = Math.floor((Math.random() * 20) + 1);
    rolls.push(roll);
    total += roll;
  }
  for (let i = 0; i < args.length; i += 2) {
    let n = 0;
    input = args[i];
    if (input.includes('d')) {
      const dice = input.split('d');
      if (Number(dice[0]) < 1 || !Number(dice[0])) {
        msg.reply(`Invalid input: ${args[i]}: Number of dice must be a positive number.
        Example: 2d10`);
        return;
      }
      if (Number(dice[1]) < 1 || !Number(dice[1])) {
        msg.reply(`Invalid input: ${args[i]}: Number of sides must be a positive number.
        Example: 2d10`);
        return;
      }
      if (Number(dice[0]) > 10000000) {
        msg.reply('You do **NOT** need more than **TEN MILLION** dice');
        return;
      }
      if (Number(dice[1]) > 10000000) {
        msg.reply('Your dice rolled away due to too many sides!');
        return;
      }
      for (let j = 0; j < Number(dice[0]); j++) {
        if (rolls.length >= 10000000) {
          msg.reply('You do **NOT** need more than **TEN MILLION** dice');
          return;
        }
        roll = Math.floor((Math.random() * Number(dice[1]) + 1));
        rolls.push(roll);
        n += roll;
      }
    } else {
      n = Number(input);
      if (!n) {
        msg.reply(`Invalid input: ${args[i]}: Must be a number.`);
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
  let cont = '';
  if (rolls.length > 100) { cont = '...'; }
  msg.reply(`Your total is ${total.toString()}
  Rolls: ${rolls.slice(0, 100).join(', ')}${cont}`);
};

exports.hero = (msg, args) => {
  const { MessageEmbed } = require('discord.js');
  const classes = require('./adventurers').classes;
  const hero = new classes[Math.floor((Math.random() * classes.length))]();
  const heroEmbed = new MessageEmbed()
    .setTitle('Your Adventerer')
    .setColor('#C284FF')
    .addFields(
      { name: 'Class', value: hero.className, inline: true },
      { name: 'Race', value: hero.race, inline: true },
      { name: 'Background', value: hero.background, inline: true },
      {
        name: 'Stats',
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
    msg.reply({ embeds: [heroEmbed] });
  } else {
    msg.reply('Failed To Create Hero');
  }
};

exports.help = (msg, cmd) => {
  const helpPages = require('./help');
  if (!cmd) {
    msg.author.send({ embeds: [helpPages.helpMsg] });
  } else if (cmd === 'help') {
    msg.reply('That seems a little redundant, but okay...');
    msg.author.send({ embeds: [helpPages.helpHelp] });
  } else if (!helpPages[cmd]) {
    msg.reply(`**${cmd}** is not one of my commands use **&help** for available commands.`);
  } else {
    msg.author.send({ embeds: [helpPages[cmd]] });
  }
};

exports.hello = (msg) => {
  msg.reply('Hi!');
};

exports.rollStats = (msg, min, max) => {
  const stats = [];
  const errors = [];
  if (!min) { min = 8; }
  if (!max) { max = 18; }
  min = Number(min);
  max = Number(max);
  if (!min || min < 0) {
    errors.push('<min> must be a positive number');
  }
  if (!max || max < 0) {
    errors.push('<max> must be a positive number');
  }
  if (min > max) {
    errors.push('<min> must be less than <max>');
  }
  if (errors.length > 0) {
    errors.push('Use `&help rollStats` for more information');
    msg.reply(errors.join('\n'));
    return;
  }
  for (let i = 0; i < 6; i++) {
    const stat = Math.floor(Math.random() * (max - min + 1) + min);
    stats.push(stat);
  }
  msg.reply(`Your Stats: ${stats.join(', ')}`);
};
