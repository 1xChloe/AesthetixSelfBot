const fs = require('fs');
const settings = require("./../../settings.json")
const { RichEmbed, MessageAttachment, Attachment } = require('discord.js');

module.exports = {
    name: 'get-file',
    description: 'Fetches the file from the commands/events folder',
    usage: 'get-file <FileName>',
    aliases: ['getfile', 'gf'],
    async execute(msg, args) {

        let input = args.join("")
        let FileName;

        if (!input) return msg.channel.send(new RichEmbed().setColor(`RED`).setDescription(`**You did not provide a file path**`).setTimestamp())

        try {
            const data = fs.readFile(input, (err, data) => {
                let FileContent = data.toString()
                let FileSplit = input.split("/")
                for (let idx = 0; idx < FileSplit.length; idx++) {
                    FileName = FileSplit[idx]
                }
                msg.channel.send(new RichEmbed().setColor(settings.embedcolour).setDescription(`Showing File Content For: **${input}**`).setTimestamp())
                msg.channel.send(new Attachment(Buffer.from(FileContent), `${FileName}`))
            })
        } catch (err) {
            msg.channel.send(new RichEmbed().setColor(`RED`).setDescription(`**You did not provide a valid file path**`).setTimestamp())
        }
    }
}