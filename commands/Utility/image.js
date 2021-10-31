const settings = require("./../../settings.json")
const gis = require('g-i-s');
const { RichEmbed } = require("discord.js")

module.exports = {
    name: 'image',
    description: 'Searches google for given query',
    usage: 'image <Query>',
    aliases: ['img'],
    async execute(msg, args) {

        let input = args.join(" ") || "Femboy"

        gis(input, logResults);

        async function logResults(error, results) {
            if (error) {
                console.log(error);
            }
            else {
                let Length = results.length
                let Choice = Math.floor(Math.random(0) * Length)
                let First = await results[Choice].url
                msg.channel.send(new RichEmbed().setDescription(`Image Result For: **${input}**`).setColor(settings.embedcolour).setImage(First).setFooter(`Search Engine: Google || Result Number: ${Choice + 1}`).setTimestamp())
            }
        }
    }
}