const Discord = require('discord.js')

module.exports.run = async(client, message, args) => {
  let avatarUser = message.mentions.users.first() || message.guild.members.get(args[0])
 if(!avatarUser) return message.channel.send("You must mention a user!")
  
  let embed = new Discord.RichEmbed()
  .setColor("#FFFF00")
  .setDescription(`${avatarUser}'s Avatar!`)
  .setImage(avatarUser.avatarURL)
  .setFooter(`Requested by ${message.author.tag}`)
  
  message.channel.send(embed)
}
module.exports.help = {
  name: "avatar"
}