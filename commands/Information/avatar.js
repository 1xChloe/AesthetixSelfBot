const { RichEmbed } = require('discord.js');
const settings = require('./../../settings.json')

module.exports = {
    name: 'avatar',
    description: 'Returns the users avatar',
    usage: 'avatar <User>',
    aliases: ['av'],
    /**
     * @param {Message} msg
     */
    async execute(msg, args) {

        let member = msg.mentions.users.first() || msg.author

        msg.channel.send(new RichEmbed().setColor(settings.embedcolour).setImage(member.displayAvatarURL).setTimestamp().setDescription(`**${member}**'s Avatar`))
    }
}