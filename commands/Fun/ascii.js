const { RichEmbed } = require('discord.js');
const figlet = require('figlet');
const settings = require("./../../settings.json");

module.exports = {
    name: 'ascii',
    description: 'Returns ascii converted text',
    usage: 'ascii <Text>',
    /**
     * @param {Message} msg
     */
    async execute(msg, args) {

        let message = args.join(" ")

        if (!message) return msg.channel.send(new RichEmbed().setColor(`RED`).setDescription(`**You must provide text to convert**`).setTimestamp())

        figlet(message, (err, ascii) => {
            if (err) {
                let embed = new RichEmbed()
                    .setColor("RED")
                    .setDescription(`**An error occured while executing the command**`)
                    .setTimestamp()

                msg.channel.send(embed)
                return;
            }
            msg.channel.send("```" + ascii + "```")
        })
    }
}