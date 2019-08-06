const Discord = require('discord.js')

module.exports.run = async(client, message, args) => {
  
  let user = message.author
  
  user.send("Testing...")
}
module.exports.help = {
  name: "test"
}