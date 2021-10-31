const { RichEmbed } = require("discord.js");
const settings = require("./../../settings.json");

module.exports = {
    name: 'poke',
    description: 'You have to get what you want, right?',
    usage: 'pout',
    async execute(msg, args) {

        let embed = new RichEmbed()
            .setDescription(`**But I WANT IT >;C**`)
            .setColor(settings.embedcolour)
            .setImage(`https://cutewallpaper.org/21/anime-pout-face/Imgur-The-magic-of-the-Internet.gif`)
            .setFooter(`(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧                  ｡◕‿◕｡`)

        msg.channel.send(embed)
    }
}