const { RichEmbed } = require("discord.js");
const settings = require("./../../settings.json");

module.exports = {
    name: 'suicide',
    description: `Can't get much more worse than this I guess`,
    usage: 'suicide',
    async execute(msg, args) {

        let embed = new RichEmbed()
            .setDescription(`**Time to end it all, nothin more left..**`)
            .setColor(settings.embedcolour)
            .setImage(`http://i.stack.imgur.com/fiQBd.gif`)
            .setFooter(`We tried to stop you, but we couldn't..`)

        msg.channel.send(embed)
    }
}