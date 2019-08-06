const Discord = require('discord.js') 
const owners = ["301379068941828096", "519999826696470559", "222882552472535041"]
module.exports.run = async(client, message, args) => {
  if(!owners.includes(message.author.id))  return message.channel.send("This is an owner only command! You must be a bot developer to use this!")
   
  //no need to return or check if something is true, only if it's false so we can stop the rest of the code from running
  message.channel.send (client.guilds.map(g => g.name))
}
module.exports.help = {
  name: "servers"
}