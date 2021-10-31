const { RichEmbed } = require("discord.js");
const settings = require("../../settings.json");

module.exports = {
    name: 'hmph',
    description: 'See for yourself, hmph',
    usage: 'hmph',
    async execute(msg, args) {

        let embed = new RichEmbed()
            .setDescription(`**Whatever I didn't care anyway.. >;c**`)
            .setColor(settings.embedcolour)
            .setImage(`https://media1.tenor.com/images/b7e132fd3f4e110ea54ef8aa8f4eebbe/tenor.gif`)
            .setFooter(`(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧                  ｡◕‿◕｡`)

        msg.channel.send(embed)
    }
}