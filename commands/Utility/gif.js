const settings = require("./../../settings.json")
var giphy = require('giphy-api')();
const { RichEmbed } = require("discord.js")

module.exports = {
    name: 'gif',
    description: 'Returns a gif of given query',
    usage: 'gif <Query>',
    async execute(msg, args) {

        let input = args.join(" ") || "Femboy"

        await giphy.search({ q: input, rating: "r", fmt: "json" }).then(async function (res) {
            let resolve = await res
            let Length = Object.keys(resolve.data).length
            let Choice = Math.floor(Math.random(0) * Length)
            let First = resolve.data[Choice].url
            msg.channel.send(First)
        });
    }
}