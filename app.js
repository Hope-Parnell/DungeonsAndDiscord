const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client({ intents: ['GUILDS', 'GUILD_MEMBERS', 'GUILD_EMOJIS_AND_STICKERS', 'GUILD_INVITES', 'GUILD_MESSAGES', 'GUILD_MESSAGE_REACTIONS', 'DIRECT_MESSAGES', 'DIRECT_MESSAGE_REACTIONS', 'GUILD_INTEGRATIONS', 'GUILD_PRESENCES'] });
client.on('ready', () => { console.log('BOT is ready'); });
client.login(process.env.BOT_TOKEN);
client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.find(c => c.name === 'general');
  channel.send('Welcome ' + member.displayName + '!');
});
