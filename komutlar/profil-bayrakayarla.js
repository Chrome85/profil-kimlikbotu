const Discord = require("discord.js");
const db = require("croxydb");
 
exports.run = async (client, message, args) => {

  let bayrak = args.slice(0).join(" ");
  if (!bayrak) return message.channel.send("**Lütfen Bayrağını Gir (EMOJİ OLSUN) :flag_tr: Gibi**");
  message.channel.send("**Profil Bayrağın Başarıyla ``" + bayrak + "`` olarak ayarlandı!**");
  db.set(`bayrak.${message.author.id}`, bayrak);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bayrak'],
  permLevel: 0,
  kategori: "Profil"
};
 
exports.help = {
  name: "bayrakayarla",
  description: "",
  usage: "",
  kategori: "Profil"
};