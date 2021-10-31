const { RichEmbed } = require('discord.js');
const { sleep } = require('../../utils/Functions');
const settings = require("./../../settings.json");

module.exports = {
    name: 'self-destruct',
    description: '10 Second bomb timer, then a self purge!',
    usage: 'self-destruct <Amount of messages to delete> <Time>',
    aliases: ['selfdestruct', 'selfd', 'sdestruct'],
    async execute(msg, args) {

        let amount = args[0] || 10
        let seconds = args[1] || 10

        const m = await msg.channel.send("🕐")
        while (seconds > 0) {
            let hyphens = "";
            for (let i = 0; i <= seconds; i++) {
                hyphens += "-";
            }
            sleep(1000)
            await m.edit('💣' + hyphens + '🔥')
            seconds--;
        }
        if (seconds === 0) {
            await m.edit("🔥💥The Bomb Exploded!💥🔥").then(async () => {
                msg.channel.fetchMessages({ limit: amount }).then(messages => {
                    messages.forEach(m => {
                        if (m.author.id == msg.client.user.id) {
                            sleep(1000)
                            m.delete()
                        }
                    });
                })
            })
        }
    }
}