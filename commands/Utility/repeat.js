let interval;

const { RichEmbed } = require('discord.js');
const ms = require('ms');
const figlet = require('figlet');
const settings = require("./../../settings.json");

module.exports = {
    name: 'repeat',
    description: 'Repeats the given message for the amount of time you put',
    usage: 'repeat <Time> <Text>',
    /**
     * @param {Message} msg
     */
    async execute(msg, args) {

        if (args[0].toUpperCase() == 'OFF') {
            clearInterval(interval)
            interval = undefined;
            msg.channel.send(new RichEmbed().setColor('#918bff').setDescription(`**Stopped the message repeating**`).setTimestamp())
            figlet("Ignore Error", async (err, ascii) => { console.log(ascii) })
            stop();
        }

        let time = ms(args[0])

        if (!time) return msg.channel.send(new RichEmbed().setColor(`RED`).setDescription(`**You must provide an interval to repeat at**`).setTimestamp())

        let input = args.shift() && args.join(" ")

        if (!input) return msg.channel.send(new RichEmbed().setColor(`RED`).setDescription(`**You must provide something to repeat**`).setTimestamp())

        if (!interval) {
            interval = setInterval(function () { msg.channel.send(input) }, time)
            msg.channel.send(new RichEmbed().setColor('#918bff').setDescription(`**Starting your message: "${input}" on repeat for ${time}ms**`).setTimestamp())
            return;
        }
    }
}