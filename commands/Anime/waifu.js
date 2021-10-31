const { RichEmbed } = require("discord.js");
const superagent = require("superagent");
const settings = require("./../../settings.json");

module.exports = {
    name: 'waifu',
    description: `Everyone has one, even if they aren't aware!`,
    usage: 'waifu',
    async execute(msg, args) {

        let user = msg.mentions.users.first() || msg.author
        var {
            body
        } = await superagent
            .get(`https://nekos.life/api/v2/img/waifu`);

        let embed = new RichEmbed()
            .setDescription(`**${user} Seems to have a cute waifu**`)
            .setColor(settings.embedcolour)
            .setImage(body.url)
            .setFooter(`(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧                  ｡◕‿◕｡`)

        msg.channel.send(embed)
    }
}