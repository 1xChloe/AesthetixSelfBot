const { RichEmbed } = require('discord.js');

module.exports = {
    name: 'playing',
    description: 'Sets your status to playing <input>',
    usage: 'playing <Input>',
    async execute(msg, args) {

        let input = args.join(" ")

        if (!input) {
            msg.channel.send(
                new RichEmbed()
                    .setDescription('**You must input a status to set**')
                    .setColor('RED')
                    .setTimestamp()
            )
            return;
        }

        msg.client.user.setActivity(`${input}`, { type: 'PLAYING' })

        msg.channel.send(new RichEmbed().setColor(`#918bff`).setDescription(`**Successfully set activity to** ` + '`' + `Playing ${input}` + '`').setTimestamp())
    }
}