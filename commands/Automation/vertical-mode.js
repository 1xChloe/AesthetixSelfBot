const { RichEmbed } = require('discord.js');
const settings = require("./../../settings.json")
const { writeFileSync } = require("fs");

module.exports = {
    name: 'vertical-mode',
    description: 'Makes all your messages vertical',
    usage: 'vertical-mode <On/Off>',
    aliases: ['verticalmode', 'vermode'],
    async execute(msg, args) {

        if (settings.verticalmode == undefined ? [] : settings.verticalmode)
            if (settings.verticalmode == undefined) {
                settings.verticalmode = false
            }

        if (!args[0]) return msg.channel.send(new RichEmbed().setColor(`RED`).setDescription(`**Incorrect usage of command**`).setTimestamp())

        if (args[0].toUpperCase() == 'OFF') {

            settings.verticalmode = false

            let embed = new RichEmbed()
                .setColor(settings.embedcolour)
                .setDescription(`Vertical Mode: **Disabled**`)
                .setTimestamp()

            msg.channel.send(embed)

            writeFileSync("settings.json", JSON.stringify(settings))
            return;
        }

        if (args[0].toUpperCase() === "ON") {
            settings.verticalmode = true

            let embed = new RichEmbed()
                .setColor(settings.embedcolour)
                .setDescription(`Vertical Mode: **Enabled**`)
                .setTimestamp()

            msg.channel.send(embed)

            writeFileSync("settings.json", JSON.stringify(settings))
        }

        writeFileSync("settings.json", JSON.stringify(settings))
    }
}
