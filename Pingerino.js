const Discord = require('discord.js');



const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});
client.on('message', message => {
  if (message.content === 'y?ping') {
    message.channel.send('pong');
  }
});
const { Client, Attachment } = require('discord.js');
client.on('message', message => {
  if (message.content === 'y?avatar') {
    message.reply(message.author.avatarURL);
  }
});
client.on('message', message => {
    if (message.content === 'y?rip') {
        const attachment = new Attachment('https://i.imgur.com/w3duR07.png');
        message.channel.send(attachment);
    }
});
client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(ch => ch.name === 'member-log')
  if (!channel) return;
  channel.send(`Welcome to the server, ${member}`);
});
client.on('message', message => {
  if (!message.guild) return;

  if (message.content.startsWith('y?kick')) {
    const user = message.mentions.users.first();

    if (user) {
      const member = message.guild.member(user);
      if (member) {
        /**

         * Kick the member

         * Make sure you run this on a member, not a user!

         * There are big differences between a user and a member

         */
        member.kick('Optional reason that will display in the audit logs').then(() => {
          message.reply(`Successfully kicked ${user.tag}`);
        }).catch(err => {
          message.reply('I was unable to kick the member');
          console.error(err);
        });
      } else {
        message.reply('That user isn\'t in this guild!');
      }
    } else {
      message.reply('You didn\'t mention the user to kick!');
    }
  }
});
client.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith('y?ban')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);

      if (member) {
        /**

         * Ban the member

         * Make sure you run this on a member, not a user!

         * There are big differences between a user and a member

         * Read more about what ban options there are over at

         * https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=ban

         */
        member.ban({
          reason: 'They were bad!',
        }).then(() => {
          message.reply(`Successfully banned ${user.tag}`);
        }).catch(err => {
          message.reply('I was unable to ban the member');
          console.error(err);
        });
      } else {
        message.reply('That user isn\'t in this guild!');
      }
    } else {
      message.reply('You didn\'t mention the user to ban!');
    }
  }
});
client.on('message', message => {
    if (!message.guild) return;
    if (message.content.startsWith('y?latency')) {
        message.channel.send(`${client.ping}ms`)
    }
}};
client.on('message', message => {
	if (!message.guild) return;
	if (message.content.startsWith('y?support')) {
		message.channel.send('https://discord.gg/6jJx4RX')
}};


client.login('BOTTOKEN')
