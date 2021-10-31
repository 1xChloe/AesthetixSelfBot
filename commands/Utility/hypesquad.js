const { RichEmbed } = require('discord.js');
const settings = require("./../../settings.json")
const request = require("request");

let thumbnail;
module.exports = {
    name: 'hypesquad',
    description: 'Changes your discord house',
    usage: 'hypesquad <House>',
    async execute(msg, args) {

        try {
            let inputt = args.join(" ")
            if (!inputt) return msg.channel.send(new RichEmbed().setColor(`RED`).setDescription(`**You must pick a house to change to**`).setTimestamp())

            let input = inputt.toLowerCase()
            let urls = ['https://vignette.wikia.nocookie.net/hypesquad/images/4/41/BraveryLogo.png/revision/latest', 'https://vignette.wikia.nocookie.net/hypesquad/images/8/8f/BrillianceLogo.png/revision/latest/scale-to-width-down/340', 'https://aesthetics-peace.s-ul.eu/S7RuLi2WwPf5Yg8C']

            switch (input) {
                case "bravery":
                    input = 1
                    break;
                case "brilliance":
                    input = 2
                    break;
                case "balance":
                    input = 3
                    break;
            }

            if (input === 1) { thumbnail = urls[0]; }
            if (input === 2) { thumbnail = urls[1]; }
            if (input === 3) { thumbnail = urls[2]; }

            var options = {
                'method': 'POST',
                'url': 'https://discordapp.com/api/v6/hypesquad/online',
                'headers': {
                    'authorization': settings.token,
                    'content-type': 'application/json',
                },
                body: JSON.stringify({
                    "house_id": input
                })
            };

            request(options, function (error, response) {
                if (error) throw new Error(error);
                console.log(response.body);
            });

            let embed = new RichEmbed()
                .setColor(settings.embedcolour)
                .setDescription(`**Successfully changed house**`)
                .setImage(thumbnail)
                .setTimestamp()
                .setFooter(`7 Second Timeout`)

            msg.channel.send(embed)
        } catch (e) {
            console.log(e)
        }
    }
}