const { RichEmbed } = require('discord.js');
const { sleep } = require('./../../utils/Functions.js')

module.exports = {
    name: 'ginger',
    description: 'Shows the true meaning of ginger',
    usage: 'ginger',
    /**
     * @param {Message} msg
     */
    async execute(msg, args) {


        let m = msg.channel.send("GINGER").then(async m => {
            sleep(2000)
            await m.edit("--N\nGI^GER")
            sleep(2000)
            await m.edit("-N\nGI-GER")
            sleep(2000)
            await m.edit("N\nGI-GER")
            sleep(2000)
            await m.edit("NGIGER")
            sleep(2000)
            await m.edit("NᵥIGER\n-G")
            sleep(2000)
            await m.edit("N-IGER\n--G")
            sleep(2000)
            await m.edit("NI-GER\n--G")
            sleep(2000)
            await m.edit("NIGGER")
        })

    }
}