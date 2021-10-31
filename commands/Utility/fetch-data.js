const axios = require('axios');
const { RichEmbed, MessageAttachment, Attachment } = require('discord.js');
const settings = require("../../settings.json");

module.exports = {
    name: 'fetch-data',
    description: 'Fetches the html data from the url provided',
    usage: 'fetch-data <Url>',
    aliases: ['fetchdata', 'fd'],
    async execute(msg, args) {

        let input = args.join("")

        if (!input) return msg.channel.send(new RichEmbed().setColor(`RED`).setDescription(`**You did not provide a url to fetch from**`).setTimestamp())

        await axios.get(`${input}`).then(async res => {
            console.log(res)

            let Data1 = JSON.stringify(res.data)

            let Data = (await Buffer.from(Data1, 'utf-8'))

            let Attach = new Attachment(Data, `${input}-Fetched.txt`)

            await msg.channel.send(Attach)
        })
    }
}