const { RichEmbed } = require('discord.js');
const { RandomPicture } = require('random-picture')
const settings = require("./../../settings.json");

module.exports = {
    name: 'random-image',
    description: 'Fetches a random image',
    usage: 'random-image',
    aliases: ['randomimage', 'randomi', 'rimage'],
    async execute(msg, args) {

        const image = await RandomPicture()

        let embed = new RichEmbed()
            .setColor(settings.embedcolour)
            .setImage(`${image.url}`)
            .setFooter(`These images are completely random`)
            .setTimestamp()
        msg.channel.send(embed)
    }
}