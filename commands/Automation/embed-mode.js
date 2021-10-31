const { RichEmbed } = require('discord.js');
const settings = require("./../../settings.json")
const { writeFileSync } = require("fs");

module.exports = {
    name: 'embed-mode',
    description: 'Makes all your messages appear embeded',
    usage: 'embed-mode <On/Off>',
    aliases: ['embedmode', 'embmode'],
    async execute(msg, args) {

        if (settings.embedmode == undefined ? [] : settings.embedmode)
            if (settings.embedmode == undefined) {
                settings.embedmode = false
            }

        if (!args[0]) return msg.channel.send(new RichEmbed().setColor(`RED`).setDescription(`**Incorrect usage of command**`).setTimestamp())

        if (args[0].toUpperCase() == 'OFF') {

            settings.embedmode = false

            let embed = new RichEmbed()
                .setColor(settings.embedcolour)
                .setDescription(`Embed Mode: **Disabled**`)
                .setTimestamp()

            msg.channel.send(embed)

            writeFileSync("settings.json", JSON.stringify(settings))
            return;
        }

        if (args[0].toUpperCase() === "ON") {
            settings.embedmode = true

            let embed = new RichEmbed()
                .setColor(settings.embedcolour)
                .setDescription(`Embed Mode: **Enabled**`)
                .setTimestamp()

            msg.channel.send(embed)

            writeFileSync("settings.json", JSON.stringify(settings))
        }

        writeFileSync("settings.json", JSON.stringify(settings))
    }
}
