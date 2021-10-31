const { RichEmbed } = require('discord.js');
const settings = require("./../../settings.json")
const { writeFileSync } = require("fs");

module.exports = {
    name: 'aesthetic-mode',
    description: 'Makes all your messages aesthetic',
    usage: 'aesthetic-mode <On/Off>',
    aliases: ['aestheticmode', 'aesmode'],
    async execute(msg, args) {

        if (settings.aestheticmode == undefined ? [] : settings.aestheticmode)
            if (settings.aestheticmode == undefined) {
                settings.aestheticmode = false
            }

        if (!args[0]) return msg.channel.send(new RichEmbed().setColor(`RED`).setDescription(`**Incorrect usage of command**`).setTimestamp())

        if (args[0].toUpperCase() == 'OFF') {

            settings.aestheticmode = false

            let embed = new RichEmbed()
                .setColor(settings.embedcolour)
                .setDescription(`Aesthetic Mode: **Disabled**`)
                .setTimestamp()

            msg.channel.send(embed)

            writeFileSync("settings.json", JSON.stringify(settings))
            return;
        }

        if (args[0].toUpperCase() === "ON") {
            settings.aestheticmode = true

            let embed = new RichEmbed()
                .setColor(settings.embedcolour)
                .setDescription(`Aesthetic Mode: **Enabled**`)
                .setTimestamp()

            msg.channel.send(embed)

            writeFileSync("settings.json", JSON.stringify(settings))
        }

        writeFileSync("settings.json", JSON.stringify(settings))
    }
}
