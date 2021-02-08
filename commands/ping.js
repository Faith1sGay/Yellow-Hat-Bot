//calling discord
const Discord = require('discord.js')

//required part
module.exports.run = async(client, message, args) => {
  //code goes in here
  setTimeout(async function update() {
    message.channel.send('Pinging...').then((message)=>message.edit(`Pong! Latency is ${Math.floor(client.ping)}ms!`))
  }, 2500);
}
//required for command name
module.exports.help = {
  name: "ping"
}