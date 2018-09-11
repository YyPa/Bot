const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
	const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setDescription('Hey Sen Sunucuma Gelirmisin : Davet Linki : https://discord.gg/c9KsCSJ');
    message.author.sendEmbed(ozelmesajkontrol) }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sa',
  description: 'Davet Gönderir',
  usage: 'sa'
};