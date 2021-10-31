const { RichEmbed } = require('discord.js');
const settings = require("./../../settings.json")
const { writeFileSync } = require("fs");

module.exports = {
    name: 'anigame-snipe',
    description: 'Activates a sniper for the anigame bot',
    usage: 'anigame-snipe <On/Off>',
    aliases: ['ag-snipe', 'agsnipe'],
    async execute(msg, args) {

        if (settings.anigame == undefined ? [] : settings.anigame)
            if (settings.anigame == undefined) {
                settings.anigame = false
            }

        if (!args[0]) {
            msg.channel.send(new RichEmbed().setColor(`RED`).setDescription(`**Incorrect usage of command**`).setTimestamp())
        }

        if (args[0]) {
            if (args[0].toUpperCase() == 'OFF') {
                settings.anigame = false
                let embed = new RichEmbed()
                    .setColor(settings.embedcolour)
                    .setDescription(`Anigame Snipe: **Disabled**`)
                    .setTimestamp()

                msg.channel.send(embed)

                writeFileSync("settings.json", JSON.stringify(settings))
                return;
            }

            if (args[0].toUpperCase() == 'ON') {
                settings.anigame = true
                let embed = new RichEmbed()
                    .setColor(settings.embedcolour)
                    .setDescription(`Anigame Snipe: **Enabled**`)
                    .setTimestamp()

                msg.channel.send(embed)

                writeFileSync("settings.json", JSON.stringify(settings))
            }
        }
    }
}