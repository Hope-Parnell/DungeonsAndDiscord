const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client({ intents: ['GUILDS', 'GUILD_MEMBERS', 'GUILD_EMOJIS_AND_STICKERS', 'GUILD_INVITES', 'GUILD_MESSAGES', 'GUILD_MESSAGE_REACTIONS', 'DIRECT_MESSAGES', 'DIRECT_MESSAGE_REACTIONS', 'GUILD_INTEGRATIONS', 'GUILD_PRESENCES'] });
client.on('ready', () => {
  console.log('BOT is ready');
  client.channels.cache.get('933870629915066368').send('Changes have gone live!');
});
client.login(process.env.BOT_TOKEN);

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.find(c => c.name === 'general');
  channel.send('Welcome ' + member.displayName + '!');
});

let cmdPromt = '*';
const commands = require('./commands');
commands.cmd = (msg, c) => {
  if (c) { cmdPromt = c; }
  msg.reply('Command promt is \'' + cmdPromt + '\'');
};

client.on('messageCreate', (msg) => {
  if (msg.content.startsWith(cmdPromt) || msg.content.startsWith('*')) {
    const cmd = msg.content.split(' ')[0].slice(cmdPromt.length);
    const args = msg.content.split(' ').slice(1);
    if (typeof commands[cmd] === 'function') {
      commands[cmd](msg, ...args);
    }
  }
});
