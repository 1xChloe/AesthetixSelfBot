const { RichEmbed } = require('discord.js');
const request = require('request');
const settings = require("./../../settings.json");

module.exports = {
    name: 'shibe',
    description: 'Returns a cute looking shiba',
    usage: 'shibe',
    async execute(msg, args) {

        request.get(`http://shibe.online/api/shibes?count=${Math.floor(Math.random() * 100)}&urls=true`, (e, r, b) => {
            let json = JSON.parse(b)
            msg.channel.send(
                new RichEmbed()
                    .setImage(json[Math.floor(Math.random() * Object.keys(json).length)])
                    .setColor(settings.embedcolour)
                    .setFooter('🐾 Woof')
                    .setTimestamp()
            )
        })
    }
}