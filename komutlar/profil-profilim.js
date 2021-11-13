const Discord = require("discord.js");
const db = require("croxydb");
 
exports.run = async (client, message, args) => {

  let user = message.mentions.users.first() || message.author;
  if (user.bot) return message.channel.send("Botların profili olmaz!");
 
  let isim = await db.fetch(`pisim_${user.id}`);
  let isimYazi;
  if (isim == null) isimYazi = "❌ `İsim ayarlanmamış!`";
  else isimYazi = `<:onaytikii:907715147362095115>    \`${isim}\``;
  
  let favorioyun = db.fetch(`pfavorioyun_${message.author.id}`);
  let favoriYazi;
  if (favorioyun == null) favoriYazi = "❌`Oyun ayarlanmamış!`";
  else favoriYazi = `<:onaytikii:907715147362095115>   \`${favorioyun}\``;
  
    let favorişarkı = db.fetch(`pfavorişarkı_${message.author.id}`);
  let favorisYazi;
  if (favorişarkı == null) favorisYazi = "❌ `Şarkı ayarlanmamış!`";
  else favorisYazi = `<:onaytikii:907715147362095115>   \`${favorişarkı}\``;
 
  let soyisim = await db.fetch(`psoyisim_${user.id}`);
  let soyisimYazi;
  if (soyisim == null) soyisimYazi = "❌ `Soy İsim ayarlanmamış!`";
  else soyisimYazi = `<:onaytikii:907715147362095115>   \`${soyisim}\``;
 
  let cinsiyet = await db.fetch(`pcinsiyet_${user.id}`);
  let csYazi;
  if (cinsiyet == null) csYazi = "❌ `Cinsiyet ayarlanmamış!`";
  if (cinsiyet == "kız") csYazi = "<:onaytikii:907715147362095115>   `Kız`";
  if (cinsiyet == "erkek") csYazi = "<:onaytikii:907715147362095115>  `Erkek`";
  if (cinsiyet == "yok") csYazi = "<:onaytikii:907715147362095115>   `Belirtmek istemiyor.`";
 
  let bayrak = await db.fetch(`bayrak.${user.id}`);
  let bYazi;
  if (bayrak == null) bYazi = "❌ `Bayrak Girilmemiş.`";
  else bYazi = `<:onaytikii:907715147362095115>   ${bayrak}`;
 
  const embed = new Discord.MessageEmbed()
    .setAuthor(`${user.username} Adlı Kullanıcının Profili`, user.displayAvatarURL({dynamic : true}))
  .setThumbnail(user.displayAvatarURL({dynamic : true}))
.setImage(user.displayAvatarURL({dynamic : true}))
  .setColor('#f6ff00')
    .addField("『 İsim 』", isimYazi)
    .addField("『 Soy isim 』", soyisimYazi)
    .addField("『 Cinsiyet 』", cinsiyet)
    .addField("『 Bayrak! 』", bYazi)
    .addField("『 Favori Oyun 』", favoriYazi)
    .addField("『 Favori Şarkı 』", favorisYazi)
  message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [""],
  permLevel: 0,
  kategori: "Profil"
};
 
exports.help = {
  name: "profilim",
  description: "",
  usage: "",
  kategori: "Profil"
};
