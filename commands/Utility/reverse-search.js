const settings = require("./../../settings.json")
const google = require("googlethis");
const { RichEmbed } = require("discord.js")
const { sleep } = require("../../utils/Functions")

module.exports = {
    name: 'reverse-search',
    description: 'Reverse searches google for given query',
    usage: 'reverse-search <Query>',
    aliases: ['reversesearch', 'rsearch'],
    async execute(msg, args) {

        let input = args.join(" ")
        if (!input) return;

        const reverse = await google.search(input, { ris: true });

        let data = reverse.results

        let Length = Object.keys(data).length
        if (Length < 1) return msg.channel.send(new RichEmbed().setColor(`RED`).setDescription(`**No results found**`).setTimestamp())

        let embed = new RichEmbed()
            .setColor(settings.embedcolour)
            .setDescription(`Reverse Search Result For: **${input}**`)
            .setFooter(`Search Engine: Google || Matches Found: ${Length}`)
            .setTimestamp()
        embed.fields = []

        for (let i = 0; i < Object.keys(data).length; i++) {
            const key = Object.keys(data)[i]
            embed.addField(data[key].title, data[key].url)
        }
        msg.channel.send(embed)
    }
}