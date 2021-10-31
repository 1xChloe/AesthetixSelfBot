const { RichEmbed } = require('discord.js');
const settings = require("./../../settings.json")
const { writeFileSync } = require("fs");

module.exports = {
    name: 'edit-mode',
    description: 'Makes all your messages appear edited',
    usage: 'edit-mode <On/Off>',
    aliases: ['editmode', 'emode'],
    async execute(msg, args) {

        if (settings.editmode == undefined ? [] : settings.editmode)
            if (settings.editmode == undefined) {
                settings.editmode = false
            }

        if (!args[0]) return msg.channel.send(new RichEmbed().setColor(`RED`).setDescription(`**Incorrect usage of command**`).setTimestamp())

        if (args[0].toUpperCase() == 'OFF') {

            settings.editmode = false

            let embed = new RichEmbed()
                .setColor(settings.embedcolour)
                .setDescription(`Edit Mode: **Disabled**`)
                .setTimestamp()

            msg.channel.send(embed)

            writeFileSync("settings.json", JSON.stringify(settings))
            return;
        }

        if (args[0].toUpperCase() === "ON") {
            settings.editmode = true

            let embed = new RichEmbed()
                .setColor(settings.embedcolour)
                .setDescription(`Edit Mode: **Enabled**`)
                .setTimestamp()

            msg.channel.send(embed)

            writeFileSync("settings.json", JSON.stringify(settings))
        }

        writeFileSync("settings.json", JSON.stringify(settings))
    }
}
