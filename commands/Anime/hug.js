const { RichEmbed } = require("discord.js");
const superagent = require("superagent");
const settings = require("./../../settings.json");

module.exports = {
    name: 'hug',
    description: 'Hugs a user you mention, obviously',
    usage: 'hug <User>',
    async execute(msg, args) {

        let user = msg.mentions.users.first() || msg.author
        var {
            body
        } = await superagent
            .get(`https://nekos.life/api/v2/img/hug`);

        let embed = new RichEmbed()
            .setDescription(`**I think you deserve this ${user}!**`)
            .setColor(settings.embedcolour)
            .setImage(body.url)
            .setFooter(`(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧                  ｡◕‿◕｡`)

        msg.channel.send(embed)
    }
}