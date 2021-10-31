const { RichEmbed } = require('discord.js');

module.exports = {
    name: 'listening',
    description: 'Sets your status to listening to <input>',
    usage: 'listening <Input>',
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

        msg.client.user.setActivity(`${input}`, { type: 'LISTENING' })

        msg.channel.send(new RichEmbed().setColor(`#918bff`).setDescription(`**Successfully set activity to** ` + '`' + `Listening to ${input}` + '`').setTimestamp())
    }
}