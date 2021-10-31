let interval;

const { RichEmbed } = require('discord.js');
const ms = require("ms");
const settings = require("./../../settings.json")
const yiff = require("yiff_api")
const y = new yiff.yiff()

module.exports = {
    name: 'yiff-bomb',
    async execute(msg, args) {

        try {
            let user = msg.mentions.users.first()
            let time = ms(`1s`)
            if (!interval) {
                interval = setInterval(async function () {
                    y.straight().then(y => {
                        msg.channel.send(y.url)
                    })
                }, time)

                msg.channel.send(new RichEmbed().setColor(settings.embedcolour).setDescription(`**Started the yiff bombing**`).setTimestamp())
                return;
            }

            if (args[0].toUpperCase() == 'OFF') {
                clearInterval(interval)
                interval = undefined;
                msg.channel.send(new RichEmbed().setColor(settings.embedcolour).setDescription(`**Ended the yiff bombing**`).setTimestamp())
            }

        } catch (e) {
            clearInterval(interval)
            interval = undefined;
            console.log("Stopped command due to error, caused by not being able to send messages to said user")
        }
    }
}