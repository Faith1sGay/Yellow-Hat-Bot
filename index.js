const http = require('http');
const express = require('express');
const app = express();
let child_process = require('child_process');
let d = Date(Date.now());
let date = d.toString();
app.get('/', (request, response) => {
	console.log(date + ' Ping Received');
	response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
	child_process.exec('refresh', function(error, stdout, stderr) {
		console.log(stdout);
	});
	http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 900000);

const Discord = require('discord.js');
const client = new Discord.Client();
const botconfig = require('./botconfig.json');
const prefix = botconfig.prefix;
const fs = require('fs');
const Redis = require('ioredis');
const prefixes = new Redis();

client.commands = new Discord.Collection;

fs.readdir('./commands/', (err, files) => {
	if (err) return console.error(err);
	files.forEach(file => {
		if (!file.endsWith('.js')) return;
		let props = require(`./commands/${file}`);
		let commandName = file.split('.')[0];
		console.log(`» ${commandName} loaded!`);
		client.commands.set(commandName, props);
	});
});

client.on('ready', async () => {
	console.log('Bot is ready!');
	let time = 0;
	setInterval(async function update() {

		if(time === 0) {
			client.user.setActivity(`${client.users.size - 2} users`, { type: 'Watching' });
			time++;
		}
		else if(time === 1) {
			client.user.setActivity(`${client.guilds.size - 3} guilds!`, { type: 'Watching' });
			time++;
		}
		else if(time === 2) {
			client.user.setActivity('v1.0.4', { type: 'Playing' });
			time = 0;
		}
	}, 20000);
});
client.on('message', async message => {
	const guildPrefix = await prefixes.get(message.guild.id);
	let prefix1 = '';
	if(message.author.bot) return;
	if (message.content.startsWith(!prefix)) return;
	if (message.content.startsWith(prefix)) {
		prefix1 = prefix;
	}
	else if (message.content.startsWith(guildPrefix)) {
		prefix1 = guildPrefix;
	}
	else { return; }

	let messageArray = message.content.split(' ');
	let cmd = messageArray[0];
	let args = messageArray.slice(1);

	let commandfile = client.commands.get(cmd.slice(prefix1.length));
	if(commandfile) commandfile.run(client, message, args, prefixes);
});
client.login('NTY5OTcwMzExMDAxMjc2NDE2.XRF6cg.E5qLlwrP9N51ZDVtlQTO-DtZ5tU')