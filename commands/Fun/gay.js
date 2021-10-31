const { RichEmbed } = require('discord.js');
const { getMemberMention } = require('./../../utils/Mentions.js')
const settings = require("./../../settings.json");

module.exports = {
    name: 'gay',
    description: 'Shows the gay meter for a user',
    usage: 'gay <Mention>',
    /**
     * @param {Message} msg
     */
    async execute(msg, args) {

        function gay(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        let member = msg.mentions.users.first()

        let embed = new RichEmbed()
            .setColor(settings.embedcolour)
            .setThumbnail(`https://www.comprarbanderas.es/images/banderas/400/377-orgullo-gay_400px.jpg`)
            .setDescription(`**${member} is ${gay(0, 100)}% gay**`)
            .setTimestamp()
        msg.channel.send(embed)

    }
}