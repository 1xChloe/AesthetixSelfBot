const { RichEmbed } = require("discord.js");
const settings = require("./../../settings.json");
const wd = require("word-definition");

module.exports = {
    name: 'define',
    description: 'Defines the given word',
    usage: 'define <Input>',
    aliases: ['dictionary'],
    async execute(msg, args) {

        try {
            let input = args.join(" ") || 'Femboy'

            wd.getDef(input, "en", null, function (definition) {

                let embed = new RichEmbed()
                    .setColor(settings.embedcolour)
                    .setThumbnail(`https://www.clipartmax.com/png/small/481-4813924_suage-wiktionary-dictionary-logo.png`)
                    .setDescription(`**Definition For: ${input}**`)
                    .addField('Word Category', definition.category || "No Result Found")
                    .addField('Definition', definition.definition || "No Result Found")
                    .setTimestamp()

                msg.channel.send(embed)
            });
        } catch (error) {
            let embed = new RichEmbed()
                .setColor(settings.embedcolor)
                .setDescription(`**Could not find a definition**`)
                .setTimestamp()

            msg.channel.send(embed)
        }
    }
}