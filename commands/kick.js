const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
  
  let mentioned = message.mentions.members.first() || message.guild.members.get(args[0])
  if(!mentioned) return message.channel.send("Please mention a user!")
  
  let reason = args.slice(1).join(" ")
  if(!reason) reason = ("No reason provided")
  
  let logs = message.guild.channels.find(c=>c.name==="logs")
  if(mentioned.hasPermission(['KICK_MEMBERS'])) return message.channel.send("I cannot kick them!")
  
 message.guild.member(mentioned).kick(reason)
  logs.send(reason)
  if(!logs)  {
     message.channel.send("There is no channel called `logs` or I cannot see it. This time the kick won't be logged.")
  }
  message.channel.send(`${mentioned.tag} has been kicked!`)
  
}
module.exports.help = {
  name: "kick"
}