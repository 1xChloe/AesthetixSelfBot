const { Message, RichEmbed } = require('discord.js');
const axios = require('axios');
const fetch = require("node-fetch");
const settings = require("./../../settings.json")

module.exports = {
    name: 'roblox',
    description: 'Checks a users roblox account if linked',
    usage: 'roblox <User>',
    aliases: ['discroblox'],
    /**
     * @param {Message} msg
     */
    async execute(msg, args) {

        function getProfileImage(id) {
            console.log(id)
            return new Promise((resolve) => {
                fetch(`https://thumbnails.roblox.com/v1/users/avatar?userIds=${id}&size=420x420&format=Png&isCircular=false&_=${id}`)
                    .then((req) => req.json())
                    .then((json) => resolve(json.data[0].imageUrl))
            })
        }

        let input = msg.mentions.users.first()

        if (!input) return msg.channel.send(new RichEmbed().setColor(`RED`).setDescription(`**You must provide a user to scan**`).setTimestamp())

        axios.request(`https://verify.eryn.io/api/user/${input.id}`, { validateStatus: false }).then(async function (response) {

            let body = response.data

            if (body.status === "ok") {

                let embed = new RichEmbed()
                    .setColor(settings.embedcolour)
                    .setDescription(`**${input}'s Roblox Details**`)
                    .setThumbnail(await getProfileImage(body.robloxId))
                    .addField(`User:`, body.robloxUsername)
                    .addField(`User ID:`, body.robloxId)
                    .setTimestamp()

                await msg.channel.send(embed)

            } else {

                msg.channel.send(new RichEmbed().setColor('RED').setDescription(`**This user has no roblox account linked**`).setTimestamp())

            }
        })

    }
}