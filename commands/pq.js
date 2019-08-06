const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
  
  let array = ["What is the meaning of a good life?", 
               "Is is more important to be respected or liked?", 
               "Have we become less happy as technology advances?",
              "Does fate exist?",
               "Do guns kill people or do people kill people?",
              "Are animals aware of them being animals?"]
  
  let quote = array[Math.floor((Math.random() * array.length) + 0)]
  
  message.channel.send(quote)
}
module.exports.help = {
  name: "philosophical-question"
}