const db = require("croxydb");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => { 

let eklenti = new Discord.MessageEmbed()  
.setColor('RANDOM')
.setTitle(' Yardım Komutları')
.setTimestamp()
.addField(' .bayrak', 'Bayrak ayarlar.')
.addField(' .cinsiyet', 'Cinsiyet ayarlar.')
.addField(' .İsim', 'İsim ayarlar.')
.addField(' .Soyisim', 'Bayrak ayarlar.')
.addField(' .oyun', 'Oyun ayarlar.')
.addField(' .şarkı', 'Şarkı ayarlar.')
.addField(' .profilim', 'Profilinizi ayarlarsınız.')
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["moderasyon","ayarlar"], 
    permLevel: 0
  };
  exports.help = {
    name: 'yardım'
  }; 
  