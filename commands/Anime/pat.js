const { RichEmbed } = require("discord.js");
const superagent = require("superagent");
const settings = require("./../../settings.json");

module.exports = {
    name: 'pat',
    description: 'Pats the user you mention!',
    usage: 'pat <User>',
    async execute(msg, args) {

        var {
            body
        } = await superagent
            .get(`https://nekos.life/api/v2/img/pat`);

        let embed = new RichEmbed()
            .setDescription(`**Have a headpat kind person ${user} ^-^**`)
            .setColor(settings.embedcolour)
            .setImage(body.url)
            .setFooter(`(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧                  ｡◕‿◕｡`)

        msg.channel.send(embed)
    }
}