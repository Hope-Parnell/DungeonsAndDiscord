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
      value: '**cmd** - tells/changes the command prompt'
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
  );
