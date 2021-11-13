const Discord = require("discord.js");
const db = require("croxydb");
 
exports.run = async (client, message, args) => {

  let soyisim = args.slice(0).join(" ");
  if (!soyisim) return message.channel.send("**Lütfen Soyismini yaz.**");
  message.channel.send(" **Soy İsmin ``" + soyisim + "`` olarak ayarlandı!**");
  db.set(`psoyisim_${message.author.id}`, soyisim);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['soyisim'],
  permLevel: 0,
  kategori: "Profil"
};
 
exports.help = {
  name: "soyisimayarla",
  description: "",
  usage: "",
  kategori: "Profil"
};