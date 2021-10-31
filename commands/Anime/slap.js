const { RichEmbed } = require("discord.js");
const superagent = require("superagent");
const settings = require("./../../settings.json");

module.exports = {
    name: 'slap',
    description: 'Bring forth retribution to comfort yourself!',
    usage: 'slap <User>',
    async execute(msg, args) {

        var {
            body
        } = await superagent
            .get(`https://nekos.life/api/v2/img/slap`);
        let embed = new RichEmbed()
            .setDescription(`**${user} gets demolished by my superior self**`)
            .setColor(settings.embedcolour)
            .setImage(body.url)
            .setFooter(`(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧                  ｡◕‿◕｡`)
        msg.channel.send(embed)
    }
}
