const { RichEmbed } = require('discord.js');
const settings = require("./../../settings.json");

module.exports = {
    name: 'snipe',
    description: 'Fetches the most recent deleted message within the channel',
    usage: 'snipe',
    async execute(msg, args) {

        const sniped = msg.client.delMsg.get(`${msg.channel.id}`);

        if (!sniped) return msg.channel.send(new RichEmbed().setColor(`RED`).setDescription(`**There are no messages to snipe**`).setTimestamp())

        let embed = new RichEmbed()
            .setColor(settings.embedcolour)
            .setAuthor(`Deleted by ${sniped.author.tag}`, sniped.author.displayAvatarURL)
            .setDescription(sniped.content || "Cannot display embeds")
            .setTimestamp()

        msg.channel.send(embed)

    }
}