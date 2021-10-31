const { RichEmbed } = require("discord.js");
const superagent = require("superagent");
const settings = require("./../../settings.json");

module.exports = {
    name: 'smug',
    description: `Because I'm always correct, right?`,
    usage: 'smug',
    async execute(msg, args) {

        var {
            body
        } = await superagent
            .get(`https://nekos.life/api/v2/img/smug`);

        let embed = new RichEmbed()
            .setDescription(`**Hehe I'm a smug lil bitch >:3**`)
            .setColor(settings.embedcolour)
            .setImage(body.url)
            .setFooter(`(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧                  ｡◕‿◕｡`)

        msg.channel.send(embed)
    }
}