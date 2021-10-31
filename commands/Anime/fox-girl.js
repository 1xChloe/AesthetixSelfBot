const { RichEmbed } = require("discord.js");
const superagent = require("superagent");
const settings = require("../../settings.json");

module.exports = {
    name: 'fox-girl',
    description: 'Gives you a cute picture of a fox girl',
    usage: 'fox-girl',
    aliases: ['foxgirl', 'fgirl'],
    async execute(msg, args) {

        let user = msg.mentions.users.first() || msg.author
        var {
            body
        } = await superagent
            .get(`https://nekos.life/api/v2/img/fox_girl`);

        let embed = new RichEmbed()
            .setDescription(`**Have a cute foxy~ ^-^**`)
            .setColor(settings.embedcolour)
            .setImage(body.url)
            .setFooter(`(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧                  ｡◕‿◕｡`)

        msg.channel.send(embed)
    }
}