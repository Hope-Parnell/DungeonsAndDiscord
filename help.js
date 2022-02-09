const { MessageEmbed } = require('discord.js');

exports.helpMsg = new MessageEmbed()
  .setColor('#C284FF')
  .setAuthor({ name: 'Dungeons&Discord', iconURL: 'https://cdn.discordapp.com/avatars/933763649653342231/f9d7cd025f5e054e9f1065e1ac527f70.webp?size=160' })
  .setTitle('Dungeons&Discord Help')
  .setDescription(`Help page for Dungeons&Discord Bot.
  Default command prompt is '&'`)
  .setFields(
    {
      name: 'Core',
      value: `**cmd** - tells/changes the command prompt
      **hello** - replies with 'Hi!'
      **help <command>** - Displays the help page for a specific command`
    },
    {
      name: 'D&D',
      value: `**roll** - rolls any comination of dice and modifiers
      **hero** - randomly generates a basic character`
    },
    {
      name: 'Misc',
      value: '**lol** - Replies with "You\'re so funny!"'
    }
  )
  .setFooter({ text: '<> is used to signify input. Do not include them in your command.' });

exports.helpHelp = new MessageEmbed()
  .setColor('#C284FF')
  .setAuthor({ name: 'Dungeons&Discord', iconURL: 'https://cdn.discordapp.com/avatars/933763649653342231/f9d7cd025f5e054e9f1065e1ac527f70.webp?size=160' })
  .setTitle('Dungeons&Discord Help [help]')
  .setDescription('Help page for **help** command')
  .setFields(
    {
      name: 'Usage: help <command>',
      value: `Sends the help page for a command
      If no command is specified, sends the general help page`
    },
    {
      name: 'help help',
      value: 'You\'re already here...'
    },
    {
      name: 'help cmd',
      value: 'sends help page for **cmd**'
    },
    {
      name: 'help hello',
      value: 'sends help page for **hello**'
    },
    {
      name: 'help hero',
      value: 'sends help page for **hero**'
    },
    {
      name: 'help roll',
      value: 'sends help page for **roll**'
    },
    {
      name: 'help lol',
      value: 'sends help page for **lol**'
    }
  )
  .setFooter({ text: '<> is used to signify input. Do not include them in your command.' });

exports.cmd = new MessageEmbed()
  .setColor('#C284FF')
  .setAuthor({ name: 'Dungeons&Discord', iconURL: 'https://cdn.discordapp.com/avatars/933763649653342231/f9d7cd025f5e054e9f1065e1ac527f70.webp?size=160' })
  .setTitle('Dungeons&Discord Help [cmd]')
  .setDescription('Help page for **cmd** command')
  .setFields(
    {
      name: 'Usage: &cmd <string>',
      value: `tells/changes the command prompt
      If a string is specified, the string can now be used in place of '&' for commands
      The bot replies with the currently set string.
      * Currently not server exclusive, so string will be changed for all servers
      ** Will use everything up to the next space for the string
      *** & will always work for commands`
    },
    {
      name: 'Examples:',
      value: `&cmd
      **Bot reply**: Command promt is '&'
      &cmd !
      **Bot reply**: Command promt is now '!'
      &cmd !*
      **Bot reply**: Command promt is now '!*'
      &cmd i !
      **Bot reply**: Command promt is now 'i'`
    }
  )
  .setFooter({ text: '<> is used to signify input. Do not include them in your command.' });

exports.hero = new MessageEmbed()
  .setColor('#C284FF')
  .setAuthor({ name: 'Dungeons&Discord', iconURL: 'https://cdn.discordapp.com/avatars/933763649653342231/f9d7cd025f5e054e9f1065e1ac527f70.webp?size=160' })
  .setTitle('Dungeons&Discord Help [hero]')
  .setDescription('Help page for **hero** command')
  .setFields(
    {
      name: 'Usage: &hero',
      value: 'Creates a randomly generated character'
    },
    {
      name: 'Example:',
      value: `&hero
**__Bot Reply__**:
**Your Adventerer**
**Class** **Race**   **Background**
Wizard     Half-Elf    Charlatan
**Stats**
Strength: 9
Dexterity: 17
Constitution: 15
Intelligence: 18
Wisdom: 14
Charisma: 13`
    },
    {
      name: 'Notes',
      value: `Feature uses basic 5e rules from the PHB
      Skills and other proficiencies will have to be chosen by the player
      Randomly rolled stats are assigned based on the randomly chosen class`
    }
  )
  .setFooter({ text: '<> is used to signify input. Do not include them in your command.' });

exports.roll = new MessageEmbed()
  .setColor('#C284FF')
  .setAuthor({ name: 'Dungeons&Discord', iconURL: 'https://cdn.discordapp.com/avatars/933763649653342231/f9d7cd025f5e054e9f1065e1ac527f70.webp?size=160' })
  .setTitle('Dungeons&Discord Help [roll]')
  .setDescription('Help page for **roll** command')
  .setFields(
    {
      name: 'Usage: &roll < XdY | N > < +|- > < XdY | N > < +|- > ...',
      value: `Rolls the specified dice and adds or subtracts any modifiers specified
      Cannot roll more than 10million dice or dice with more than 10million sides
      This was implemented to avoid the bot crashing
      Dice rolled should be in XdY format and neither X or Y can be negative
      If no input is given, will roll 1d20`
    },
    {
      name: 'Examples:',
      value: `&roll 1d20
      **Bot reply**: Your total is 16
      Rolls: 16

      &roll 3d6 + 4
      **Bot reply**: Your total is 20
      Rolls: 4, 6, 6

      &roll 4d6 + 3d4 + 2
      **Bot reply**: Your total is 26
      Rolls: 3, 3, 5, 6, 1, 2, 4

      &roll 2d4 + 7 + 1d6
      **Bot reply**: Your total is 13
      Rolls: 2, 3, 1
      &roll 2d8 + 7 - 2d4 + 6 - 2
      **Bot reply**: Your total is 14
      Rolls: 7, 1, 4, 1`
    }
  )
  .setFooter({ text: '<> is used to signify input. Do not include them in your command.' });

exports.lol = new MessageEmbed()
  .setColor('#C284FF')
  .setAuthor({ name: 'Dungeons&Discord', iconURL: 'https://cdn.discordapp.com/avatars/933763649653342231/f9d7cd025f5e054e9f1065e1ac527f70.webp?size=160' })
  .setTitle('Dungeons&Discord Help [lol]')
  .setDescription('Help page for **lol** command')
  .setFields(
    {
      name: 'Usage: &lol',
      value: 'Bot replies "You\'re so funny"'
    }
  )
  .setFooter({ text: '<> is used to signify input. Do not include them in your command.' });

exports.hello = new MessageEmbed()
  .setColor('#C284FF')
  .setAuthor({ name: 'Dungeons&Discord', iconURL: 'https://cdn.discordapp.com/avatars/933763649653342231/f9d7cd025f5e054e9f1065e1ac527f70.webp?size=160' })
  .setTitle('Dungeons&Discord Help [hello]')
  .setDescription('Help page for **hello** command')
  .setFields(
    {
      name: 'Usage: &hello',
      value: 'Bot replies "Hi"'
    }
  )
  .setFooter({ text: '<> is used to signify input. Do not include them in your command.' });

exports.rollStats = new MessageEmbed()
  .setColor('#C284FF')
  .setAuthor({ name: 'Dungeons&Discord', iconURL: 'https://cdn.discordapp.com/avatars/933763649653342231/f9d7cd025f5e054e9f1065e1ac527f70.webp?size=160' })
  .setTitle('Dungeons&Discord Help [cmd]')
  .setDescription('Help page for **cmd** command')
  .setFields(
    {
      name: 'Usage: &rollStats <min> <max>',
      value: `rolls a stat array of 6 stats
      - if <min> is not specified it will set to 8
      - if <max> is not specified it will set to 18
      - to specify <max>, <min> must be specified
      - <min> must be less than <max>
      - <min> and <max> must be positive integers
      `
    },
    {
      name: 'Examples:',
      value: `&rollStats
      **Bot reply**: Your Stats: 9, 14, 10, 8, 13, 13
      &rollStats 3`
    }
  )
  .setFooter({ text: '<> is used to signify input. Do not include them in your command.' });
