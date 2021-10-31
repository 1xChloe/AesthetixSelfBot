const { RichEmbed } = require('discord.js');
const settings = require("./../../settings.json")
const axios = require("axios");
const fetch = require('node-fetch');

module.exports = {
    name: 'eval',
    description: 'Evaluates the given code',
    usage: 'eval <Code>',
    aliases: ['run'],
    async execute(msg, args) {

        let t1 = Date.now()
        const embed = new RichEmbed()
            .setColor(settings.embedcolour)
            .setTitle('Evaluating...')
            .setDescription(`**This could take a second...**`)
        const msge = await msg.channel.send(embed);
        try {
            const data = await eval(args.join(' ').replace(/```/g, ''));
            const embed = new RichEmbed()
                .setColor('GREEN')
                .setTitle(`**Evaluated given task**`)
                .addField(`Output:`, '```js\n' + `${data}` + '```')
                .setFooter(`Completed in: ${Math.ceil(Date.now() - t1)}ms`)
                .setTimestamp()
            await msge.edit(embed)
        } catch (e) {
            const embed = new RichEmbed()
                .setColor('RED')
                .setTitle(`**An issue was encountered**`)
                .addField(`Output:`, '```js\n' + `${e}` + '```')
                .setFooter(`Completed in: ${Math.ceil(Date.now() - t1)}ms`)
                .setTimestamp()
            return await msge.edit(embed);

        }
    }
}