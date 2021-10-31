const { RichEmbed } = require('discord.js');

module.exports = {
    name: 'embed-colour',
    description: 'Shows you what an embed colour would look like',
    usage: 'embed-colour <Input>',
    aliases: ['ec'],
    async execute(msg, args) {

        let input = args.join(" ")

        if (!input) {
            msg.channel.send(
                new RichEmbed()
                    .setDescription('**You must input a colour to test**')
                    .setColor('RED')
                    .setTimestamp()
            )
            return;
        }

        msg.channel.send(new RichEmbed().setColor(input).setDescription(`**This is an example for how the colour** ` + '`' + `${input}` + '`' + ` **would look like**`).setTimestamp())
    }
}