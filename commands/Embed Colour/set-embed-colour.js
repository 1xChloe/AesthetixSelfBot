const { RichEmbed } = require('discord.js');
const { writeFileSync } = require("fs");
const settings = require("./../../settings.json");

module.exports = {
    name: 'set-embed-colour',
    description: 'Sets your embed colours to whichever colour you have inputted',
    usage: 'set-embed-colour <Colour>',
    aliases: ['sec', 'setec'],
    async execute(msg, args) {

        if (settings.embedcolour == undefined ? [] : settings.embedcolour)
            if (settings.embedcolour == undefined) {
                settings.embedcolour = "#918bff"
            }

        let input = args.join(" ") || "#918bff"

        settings.embedcolour = input
        writeFileSync("settings.json", JSON.stringify(settings))

        let embed = new RichEmbed()
            .setColor(settings.embedcolour)
            .setDescription(`**Changed embed colour to: ${input}**`)
            .setTimestamp()

        msg.channel.send(embed)

    }
}