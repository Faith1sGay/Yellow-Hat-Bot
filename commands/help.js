const Discord = require('discord.js')

module.exports.run = async(client, message, args) => {
  
  let hEmbed = new Discord.RichEmbed()
  .setTitle("Help With Commands")
  .setColor("#FFFF00")
  .setThumbnail(client.user.displayAvatarURL)
  .setDescription("My prefix is **y?** \n **[Support Server](https://discord.gg/zYJQZak)**")
  .addField("ID", "`y?id <user>`")
  .addField("Ping", "`y?ping`")
  .addField("Avatar", "`y?avatar <user>`")
  .addField("Kick", "`y?kick <user>`")
  .addField("Patrick Star quotes", "`y?patrick-quote`")
  .addField("Vote", "`y?vote`")
  .addField("Invite", "`y?invite`")
  .addField("Server info", "`y?serverinfo`")
  .addField("Ban", "`y?ban`")
  .addField("Random Quote", "`y?random-quote`")
  .addField("Prefix", "`y?prefix`")
  .addField("Can You Not", "`y?canyounot`")
  .addField("Eat Pant", "`y?eatpant`")
  .addField("Yoff", "`y?yoff`")
  
  .setFooter(`${client.user.tag} help`)
  .setTimestamp() 
  
  message.channel.send(hEmbed)
  
}
module.exports.help = {
  name: "help"
}
