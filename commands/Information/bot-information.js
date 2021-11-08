const { RichEmbed } = require('discord.js');
const settings = require('./../../settings.json')
const package = require("./../../package.json")

module.exports = {
    name: 'bot-information',
    description: 'Provides the bots current information',
    usage: 'bot-information',
    aliases: ['botinfo', 'bot-info'],
    /**
     * @param {Message} msg
     */
    async execute(msg, args) {

        let totalSeconds = (msg.client.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        totalSeconds %= 86400;
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);

        let t1 = Date.now()

        let embed = new RichEmbed()
            .setColor(settings.embedcolour)
            .setDescription(`**__Aesthetix SelfBot's Information__**`)
            .setThumbnail(`https://cdn.discordapp.com/attachments/856162969800540180/907349472302997544/AesthetixSB2_3.png`)
            .addField(`Developer:`, "Peace#9790", true)
            .addField(`Status:`, `Invite Only`, true)
            .addField(`Written In`, `[NodeJS v14.12.0](https://nodejs.org/en/blog/release/v14.12.0/), [Discord.js v11.6.4](https://discord.js.org/#/docs/main/11.6.4/general/welcome)`)
            .addField(`Client Ping:`, `${Math.ceil(Date.now() - t1)}ms`, true)
            .addField(`Uptime:`, `${days}d, ${hours}h, ${minutes}m and ${seconds}s`, true)
            .setFooter(`AesthetixSB Version: ${package.version}`)
            .setTimestamp()
        msg.channel.send(embed)
    }
}