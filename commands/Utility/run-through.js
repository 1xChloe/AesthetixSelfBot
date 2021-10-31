const { RichEmbed } = require("discord.js")
const settings = require("../../settings.json")
const { http, https } = require('follow-redirects');

module.exports = {
    name: 'run-through',
    description: 'Checks the given url for the output',
    usage: 'run-through <Link>',
    aliases: ['rt', 'runt', 'rthrough'],
    async execute(msg, args) {

        let Protocols;
        let input = args.join(" ")

        if (!input) return msg.channel.send(new RichEmbed().setColor(`RED`).setDescription(`**You must provide a link to check**`).setTimestamp())

        if (!input.startsWith("http")) return msg.channel.send(new RichEmbed().setColor(`RED`).setDescription(`**You must provide a link to check**`).setTimestamp())

        if (input.startsWith("https")) {
            Protocol = https
        } else if (input.startsWith("http")) {
            Protocol = http
        }

        Protocol.get(input, response => {
            console.log(response)
            let RespondingUrl = response.responseUrl
            let RespondingRedirects = response.redirects

            if (!RespondingRedirects.size > 0) {
                RespondingRedirects = "None"
            }

            msg.channel.send(new RichEmbed().setColor(settings.embedcolour).setDescription(`**${input} has been scanned:**`).addField(`Ending URL:`, RespondingUrl).addField(`Redirects:`, RespondingRedirects).setTimestamp())

        }).on('error', err => {
            console.error(err);
        });
    }
}