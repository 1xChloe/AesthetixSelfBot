const reddit = require('redditit')
const { RichEmbed } = require('discord.js');
const settings = require("./../../settings.json");

module.exports = {
    name: 'random-reddit',
    description: 'Fetches a random post from the subreddit',
    usage: 'random-reddit <SubReddit>',
    aliases: ['rreddit', 'rr'],
    async execute(msg, args) {

        let input = args.join(" ")

        if (!input) return msg.channel.send(new RichEmbed().setColor(`RED`).setDescription(`**You must input a subreddit**`).setTimestamp())

        try {
            reddit.getRandomPost(input).then(result => {
                console.log(result)

                if (result.nsfw === true) {
                    if (msg.channel.nsfw) {

                        let embed = new RichEmbed()
                            .setColor(settings.embedcolour)
                            .setDescription(`[**${result.title}**](${result.postLink})`)
                            .setImage(result.url)
                            .setFooter(`Author: ${result.author}`)
                            .setTimestamp()

                        msg.channel.send(embed)

                        return;
                    } else {
                        msg.channel.send(new RichEmbed().setColor(`RED`).setDescription(`**Cannot send an nsfw post in a non-nsfw channel**`).setTimestamp())
                        return;
                    }
                }
                let embed = new RichEmbed()
                    .setColor(settings.embedcolour)
                    .setDescription(`[**${result.title}**](${result.postLink})`)
                    .setImage(result.url)
                    .setFooter(`Author: ${result.author}`)
                    .setTimestamp()
                msg.channel.send(embed)
            })
        } catch (e) {
            msg.channel.send(new RichEmbed().setColor(`RED`).setDescription(`**That subreddit does not exist**`).setTimestamp())
        }

    }
}