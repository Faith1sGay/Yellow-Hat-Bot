const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
  
  let embed = new Discord.RichEmbed()
  .setTitle(`${message.guild.name} serverinfo`)
  .addField("Owner:", `${message.guild.owner.user.tag} || ${message.guild.owner.id}`)
  .addField("Server ID", `${message.guild.id}`)
  .addField("Server Region", `${message.guild.region}`)
  
  
}
module.exports.help = {
  name: "serverinfo"
}
