const Discord = require('discord.js')
const owner = ["301379068941828096", "519999826696470559", "222882552472535041"]
const clean = text => {
    if(typeof(text) === "string")
        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203))
    else
        return text
}

module.exports.run = (client, message, args) => {
    if (!owner.includes(message.author.id)) return message.channel.send("This is an owner only command! You must be a bot developer to use this!")
    try {
        const code = args.join(" ")
        let evaled = eval(code)
        if(typeof evaled !== "string") evaled = require("util").inspect(evaled)
        message.channel.send(clean(evaled), {code:"xl"})
    } catch (err) {
        message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``)
    }
}
module.exports.help= (client, messages, args) => {
  name: "eval"
}
//look in the test server
//see