const { RichEmbed } = require('discord.js');
const settings = require("./../../settings.json");

module.exports = {
    name: 'pastel-colours',
    description: 'Shows some pastel hex codes',
    usage: 'pastel-colours',
    aliases: ['pc'],
    async execute(msg, args) {

        let embed = new RichEmbed()
            .setColor(settings.embedcolour)
            .setDescription(`**"Pastel Rainbow" Colours**`)
            .setImage(`https://aesthetics-peace.s-ul.eu/snG0fqcTtiQOS5mX`)
            .setTimestamp()
        msg.channel.send(embed)

    }
}