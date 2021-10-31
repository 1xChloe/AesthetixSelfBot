let interval;

const { RichEmbed } = require('discord.js');
const { randomTime } = require("../../utils/Functions");
const settings = require("./../../settings.json")

module.exports = {
    name: 'autofarm-mee6',
    description: 'Autofarms MEE6 levels in the channel executed',
    usage: 'autofarm-mee6',
    aliases: ['afmee6', 'afm6'],
    async execute(msg, args) {

        msg.delete()

        let mesg = require("./../../assets/mee6msgs.json")

        if (!args[0]) return msg.channel.send(new RichEmbed().setColor(`RED`).setDescription(`**Incorrect usage of command**`).setTimestamp())

        if (args[0].toUpperCase() == 'ON')
            if (!interval) {
                msg.channel.send(new RichEmbed().setColor(settings.embedcolour).setDescription(`MEE6 Autofarm: **Enabled**`).setTimestamp())
                interval = setInterval(function () { msg.channel.send(mesg[Math.floor(Math.random() * mesg.length)]).then(mesg => { mesg.delete({ timeout: randomTime(2000, 3000) }) }) }, randomTime(61000, 62000))
                return;
            }

        if (args[0].toUpperCase() == 'OFF') {
            clearInterval(interval)
            interval = null
            msg.channel.send(new RichEmbed().setColor(settings.embedcolour).setDescription(`MEE6 Autofarm: **Disabled**`).setTimestamp())
        }
    }
}