const { mock } = require('./../../utils/Functions.js');
const { RichEmbed } = require('discord.js');
const settings = require("./../../settings.json");

module.exports = {
    name: 'mock',
    description: 'Converts given text to mocking form',
    usage: 'mock <Text>',
    async execute(msg, args) {

        let input = args.join(" ")

        if (!input) return msg.channel.send(new RichEmbed().setColor(`RED`).setDescription(`**You must provide some text to convert**`).setTimestamp())

        let embed = new RichEmbed()
            .setColor(settings.embedcolour)
            .setDescription(`**${mock(input)}**`)
            .setTimestamp()
        msg.channel.send(embed)
    }
}