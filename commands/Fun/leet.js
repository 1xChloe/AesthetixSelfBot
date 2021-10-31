const { RichEmbed } = require('discord.js');
const leet = require('1337');
const settings = require("./../../settings.json");

module.exports = {
    name: 'leet',
    description: 'Converts given text to 1337 form',
    usage: 'leet <Text>',
    aliases: ['1337'],
    async execute(msg, args) {

        let input = args.join(" ")

        if (!input) return msg.channel.send(new RichEmbed().setColor(`RED`).setDescription(`**You must provide some text to convert**`).setTimestamp())

        let embed = new RichEmbed()
            .setColor(settings.embedcolour)
            .setDescription(`**${leet(input)}**`)
            .setTimestamp()
        msg.channel.send(embed)
    }
}