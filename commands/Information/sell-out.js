const { RichEmbed } = require('discord.js');
const settings = require("./../../settings.json");

module.exports = {
    name: 'sell-out',
    description: 'Just advertises Aesthetix SB',
    usage: 'sell-out',
    /**
     * @param {Message} msg
     */
    async execute(msg, args) {

        const embed = new RichEmbed()
            .setTitle('Aesthetix SelfBot:tm:')
            .setImage(`https://aesthetics-peace.s-ul.eu/lLpYLEJB6S4g2IX8`)
            .setDescription(`**Aesthetix SelfBot is a clean, smooth selfbot, made by yours truly**`)
            .setColor(settings.embedcolour)
            .setFooter(`This is a good sell-out`)
            .setTimestamp()

        msg.channel.send(embed)
    }
}