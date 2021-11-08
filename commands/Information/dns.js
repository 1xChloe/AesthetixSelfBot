const WebResolver = require('webresolver');
let resolver = new WebResolver("BHJ2C-SFJTU-6NAW6-Y0TXO");
const { RichEmbed } = require("discord.js");
const settings = require("./../../settings.json")

module.exports = {
    name: 'dns',
    description: 'Gets information about a given dns',
    usage: 'dns <WebsiteName>',
    async execute(msg, args) {

        let url = args.join("") || "google.com"
        let embed = new RichEmbed()
            .setTitle("DNS Records for: " + url)
            .setColor(settings.embedcolour);
        resolver.dns(url).then(res => {

            var records = res.data.records;
            for (var i = 0; i < res.data.records.length; i++) {
                var obj = records[i];
                if (obj.ip) {
                    embed.addField(obj.ip, obj.server ? obj.server : "none", true);
                }
            }
            msg.channel.send({ embed });
        });

    }
}
