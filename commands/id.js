const Discord = require('discord.js')

module.exports.run = async(client, message, args) => {
  let u = message.mentions.members.first() || message.guild.members.get(args[0])
  
  let embed = new Discord.RichEmbed()
  .setTitle("User's ID Command")
  .setDescription(`${u.user.tag}'s ID is: \n **${u.id}**`)
  .setFooter(`Requested by ${message.author.tag}`)
  .setColor("#FFFF00")
  .setThumbnail(client.user.displayAvatarURL)
  
  message.channel.send(embed)
  
}
module.exports.help = {
  name: "id"
}