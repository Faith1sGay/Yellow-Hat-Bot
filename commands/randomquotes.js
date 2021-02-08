//what does it do? Eval. hmm
//which
//oh, it allows you to test code outside the bot. most bots have it 

const Discord = require('discord.js')
const array = 

module.exports.run = async (client, message, args) => {

  let array = ["Always remember that you are absolutely unique. Just like everyone else. -Margaret Mead", 
               "No matter what people tell you, words and ideas can change the world. -Robin Williams", 
               "People who think they know everything are a great annoyance to us who do. -Isaac Asimov",
              "In order to fly, all one must do is simply miss the ground. -Douglas Adams",
               "The harder the conflict, the more glorious the triumph. -Thomas Paine",
               "I am groot. -Groot"
              ]

  let quote = array[Math.floor((Math.random() * array.length) + 0)]

  message.channel.send(quote)
}
module.exports.help = {
  name: "randomquote"
}