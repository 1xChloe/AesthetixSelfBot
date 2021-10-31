const { RichEmbed } = require("discord.js");
const superagent = require("superagent");
const settings = require("./../../settings.json");

module.exports = {
    name: 'neko',
    description: 'Returns an image of a cute neko',
    usage: 'neko',
    async execute(msg, args) {

        var {
            body
        } = await superagent
            .get(`https://nekos.life/api/v2/img/neko`);

        let embed = new RichEmbed()
            .setDescription(`**Have a cute neko~ ^-^**`)
            .setColor(settings.embedcolour)
            .setImage(body.url)
            .setFooter(`(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧                  ｡◕‿◕｡`)

        msg.channel.send(embed)
    }
}