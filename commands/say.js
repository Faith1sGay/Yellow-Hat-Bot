            const Discord = require('discord.js')
            const owners = ["301379068941828096", "519999826696470559", "222882552472535041"]
            
module.exports.run = async(client, message, args) => {
 
                
                if(!owners.includes(message.author.id))  return message.channel.send("This is an owner only command! You must be a bot developer to use this!")

                let sayMessage = args.slice(0).join(" ")
                if(!sayMessage) return message.channel.send("You must give a message")

                message.channel.send(sayMessage)
            }
module.exports.help = {
  name: "say"
}