const Discord = require("discord.js");
const db = require("croxydb");
 
exports.run = async (client, message, args) => {

  let favorişarkı = args.slice(0).join(" ");
  if (!favorişarkı) return message.channel.send("**Lütfen Şarkını yaz.**");
  message.channel.send(" **Favori Şarkın ``" + favorişarkı + "`` olarak ayarlandı!**");
  db.set(`pfavorişarkı_${message.author.id}`, favorişarkı);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['şarkı'],
  permLevel: 0,
  kategori: "Profil"
};
 
exports.help = {
  name: "favorişarkı",
  description: "",
  usage: "",
  kategori: "Profil"
};