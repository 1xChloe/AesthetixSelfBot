const { RichEmbed } = require('discord.js');
const settings = require("./../../settings.json");

module.exports = {
    name: 'everyone',
    description: 'Mentions everyone in the server',
    usage: 'everyone',
    async execute(msg, args) {

        msg.guild.fetchMembers().then(m => {
            let id = "";
            m.members.array().forEach(m => {
                id = id + "<@" + m.user.id + ">";
            });
            let mid = id.length / 2;
            let parts = [id.substring(0, mid), id.substring(mid)];

            msg.channel.send(parts[0]).then(msg => {
                msg.delete(500);

                msg.channel.send(parts[1]).then(msg => {
                    msg.delete(500);
                })
            })
        });
    }
}