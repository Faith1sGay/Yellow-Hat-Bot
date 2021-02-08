const Discord = require('discord.js')
module.exports.run = async(client, message, args) => {
  let embed = new Discord.RichEmbed()
  .setDescription('**[Click Here](https://discordapp.com/oauth2/authorize?client_id=569970311001276416&scope=bot&permissions=8)**')
  .setColor("#00FF00")
  .setFooter("Invite me")
  
  message.channel.send(embed)
}
module.exports.help = {
 name: "invite"
}