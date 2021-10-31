const { RichEmbed } = require('discord.js');
const settings = require("./../../settings.json");

module.exports = {
    name: 'reverse',
    description: 'Reverses the given text',
    usage: 'reverse <Text>',
    async execute(msg, args) {

        var regexUnicode = /([\0-\u02FF\u0370-\u1AAF\u1B00-\u1DBF\u1E00-\u20CF\u2100-\uD7FF\uE000-\uFE1F\uFE30-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])([\u0300-\u036F\u1AB0-\u1AFF\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]+)/g;
        var regexAstral = /([\uD800-\uDBFF])([\uDC00-\uDFFF])/g;

        function reverse(string) {
            string = string.replace(regexUnicode, function ($0, $1, $2) {
                return reverse($2) + $1;
            }).replace(regexAstral, '$2$1');

            var result = '';
            for (var i = string.length - 1; i >= 0; i--) {
                result += string[i];
            }
            return result;
        }

        let input2 = reverse(args.join(" "))

        if (!input2) return msg.channel.send(new RichEmbed().setColor(`RED`).setDescription(`**You must input text to reverse**`).setTimestamp())

        let embed = new RichEmbed()
            .setColor(settings.embedcolour)
            .setDescription(`**${input2}**`)
            .setTimestamp()
        msg.channel.send(embed)
    }
}