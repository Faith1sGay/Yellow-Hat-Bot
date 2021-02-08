const Discord = require('discord.js')
const botconfig = require("../botconfig.json");
const prefix = botconfig.prefix;

module.exports.run = async (client, message, args, prefixes) => {
	if (args.length) {
		await prefixes.set(message.guild.id, args[0]);
		return message.channel.send(`Successfully set prefix to \`${args[0]}\``);
	}
	return message.channel.send(`Prefix is \`${await prefixes.get(message.guild.id)} or ${prefix}\``);
},
module.exports.help = {
    name: "prefix"
}