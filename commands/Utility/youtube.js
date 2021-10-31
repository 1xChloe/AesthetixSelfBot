const { RichEmbed } = require('discord.js');
const usetube = require('usetube')
const settings = require("./../../settings.json");

module.exports = {
    name: 'youtube',
    description: 'Searches youtube for given input',
    usage: 'youtube <Input>',
    aliases: ['yt'],
    /**
     * @param {Message} msg
     */
    async execute(msg, args) {

        let input = args.join(" ")

        if (!input) return msg.channel.send(new RichEmbed().setColor(`RED`).setDescription(`**You must provide something to search**`).setTimestamp())

        await usetube.searchVideo(input).then(async data => {
            msg.channel.send(`https://www.youtube.com/watch?v=${data.videos[0].id}`)
        })

    }
}