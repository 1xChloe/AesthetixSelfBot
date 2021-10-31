const { RichEmbed } = require('discord.js');
const settings = require("./../../settings.json");

module.exports = {
    name: 'random-number',
    description: 'Gets a random number from provided range',
    usage: 'random-number <Number 1 (Smallest)> <Number 2 (Largest)>',
    aliases: ['randomnumber', 'randomn', 'rnumber', 'rnum'],
    async execute(msg, args) {

        let num1 = parseInt(args[0])
        let num2 = parseInt(args[1])

        if (isNaN(args[0]) || isNaN(args[1])) return msg.channel.send(new RichEmbed().setColor(`RED`).setDescription(`**You must provide a minimum and max value**`).setTimestamp())

        let random = Math.floor(Math.random() * num2) + num1;

        let embed = new RichEmbed()
            .setColor(settings.embedcolour)
            .setDescription(`**${random}**`)
            .setTimestamp()
        msg.channel.send(embed)
    }
}