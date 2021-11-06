const { RichEmbed } = require('discord.js');
const settings = require("./../../settings.json")
const { writeFileSync } = require("fs");

module.exports = {
    name: 'copy-cat',
    description: 'Copies the selected user until turned off',
    usage: 'copy-cat <On/Off>',
    aliases: ['copycat', 'copyc'],
    async execute(msg, args) {

        if (settings.copycat == undefined ? [] : settings.copycat)
            if (settings.copycat == undefined) {
                settings.copycat = false
            }

        let user = msg.mentions.users.first()
        if (!args[0]) return msg.channel.send(new RichEmbed().setColor(`RED`).setDescription(`**Incorrect usage of command**`).setTimestamp())

        if (args[0].toUpperCase() == 'OFF') {

            settings.copycat = false

            let embed = new RichEmbed()
                .setColor(settings.embedcolour)
                .setDescription(`Copy-Cat: **Disabled**`)
                .setTimestamp()

            msg.channel.send(embed)

            writeFileSync("settings.json", JSON.stringify(settings))
            return;
        }

        if (user) {
            settings.copycat = user.id

            let embed = new RichEmbed()
                .setColor(settings.embedcolour)
                .setDescription(`Copy-Cat: **Enabled**`)
                .setTimestamp()

            msg.channel.send(embed)

            writeFileSync("settings.json", JSON.stringify(settings))
        }

        writeFileSync("settings.json", JSON.stringify(settings))
    }
}
