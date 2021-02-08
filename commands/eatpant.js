const Discord = require('discord.js')
const { Client, Attachment } = require('discord.js');
module.exports.run = async (client, message, args) => {
    if (message.content === `y?eatpant`) {
        const attachment = new Attachment('https://raw.githubusercontent.com/DV54321/Eat-pant/master/ujJLPl8.png');
        message.channel.send(attachment);
    }
};
module.exports.help = {
    name: "eatpant"
}