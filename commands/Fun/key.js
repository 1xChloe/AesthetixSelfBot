const { RichEmbed } = require('discord.js');
const settings = require("./../../settings.json");

module.exports = {
    name: 'key',
    description: 'Generates a random string like a key',
    usage: 'key',
    async execute(msg, args) {

        let embed = new RichEmbed()
            .setColor(settings.embedcolour)
            .setDescription(`**${[...new Array(65).keys()].map(key => String.fromCharCode(Math.floor(Math.random() * 15) + 65)).map(key => String(key)[`to${new Array('Lower', 'Upper')[Math.floor(Math.random() * 2)]}Case`]()).join('')}**`)
            .setTimestamp()
        msg.channel.send(embed)
    }
}