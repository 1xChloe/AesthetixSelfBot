const { RichEmbed } = require('discord.js');
const settings = require("./../../settings.json");

module.exports = {
    name: 'random-member',
    description: 'Gets a random member fron the discord',
    usage: 'random-member',
    aliases: ['randommember', 'randomm', 'rmember', 'rmem'],
    async execute(msg, args) {

        let member = msg.guild.members.random()

        let embed = new RichEmbed()
            .setColor(settings.embedcolour)
            .setDescription(`**Randomly Chose Member: ${member}**`)
            .setTimestamp()
        msg.channel.send(embed)
    }
}