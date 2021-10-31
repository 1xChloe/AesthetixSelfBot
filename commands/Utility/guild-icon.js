const { RichEmbed } = require("discord.js")
const settings = require("./../../settings.json")

module.exports = {
    name: 'guild-icon',
    description: 'Fetches the servers icon',
    usage: 'guild-icon',
    aliases: ['gicon'],
    async execute(msg, args) {

        let embed = new RichEmbed()
            .setColor(settings.embedcolour)
            .setDescription(`**[Guild Icon URL](${msg.guild.iconURL})**`)
            .setImage(msg.guild.iconURL)
            .setTimestamp()

        msg.channel.send(embed)
    }
}