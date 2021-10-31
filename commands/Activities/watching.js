const { RichEmbed } = require('discord.js');

module.exports = {
    name: 'watching',
    description: 'Sets your status to watching <input>',
    usage: 'watching <Input>',
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

        msg.client.user.setActivity(`${input}`, { type: 'WATCHING' })

        msg.channel.send(new RichEmbed().setColor(`#918bff`).setDescription(`**Successfully set activity to** ` + '`' + `Watching ${input}` + '`').setTimestamp())
    }
}