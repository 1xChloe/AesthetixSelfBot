const { RichEmbed } = require('discord.js');
const { readFileSync } = require('fs');
const settings = require("./../../settings.json");

module.exports = {
    name: 'favourites',
    description: 'Your embed colour storage',
    usage: 'favourites',
    aliases: ['favs'],
    async execute(msg, args) {

        const object = JSON.parse(readFileSync('embed-colors.json', { encoding: 'utf8' }))

        const tags = Object.keys(object);
        const ans = tags.join(', ')

        let embed = new RichEmbed()
            .setColor(settings.embedcolour)
            .setTitle(`**Favourite Embed Colour List**`)
            .setDescription('`' + `${ans}` + '`')
            .setTimestamp()
        msg.channel.send(embed)

    }
}