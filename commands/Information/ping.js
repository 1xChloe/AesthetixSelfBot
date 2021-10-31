const { RichEmbed } = require('discord.js');
const settings = require("./../../settings.json");

module.exports = {
    name: 'ping',
    description: 'Returns clients ping',
    usage: 'ping',

    async execute(msg, args) {

        let t1 = Date.now()
        let m = await msg.channel.send(`Pinging...`)

        m.edit(new RichEmbed().setColor(settings.embedcolour).setDescription(`**User Latency (DateTime based): ${Math.ceil(Date.now() - t1)}ms\nUser Latency (Message based): ${Math.ceil(m.createdTimestamp - msg.createdTimestamp)}ms**`))
    }
}