const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client();
client.on('ready', () => { console.log('BOT is ready'); });
client.login(process.env.BOT_TOKEN);
client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.find(c => c.name === 'general');
  channel.send('Welcome' + member.displayName + '!');
});
