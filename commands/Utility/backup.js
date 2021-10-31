const { RichEmbed, MessageAttachment } = require("discord.js");
const settings = require("./../../settings.json");
const fs = require("fs")
const moment = require("moment");
const { sleep } = require("../../utils/Functions");

module.exports = {
    name: 'backup',
    description: 'Saves all of the account information, friends, guilds, etc to a .txt file',
    usage: 'backup',
    async execute(msg, args) {

        let FriendsMap = new Map()
        let GuildsMap = new Map()
        let BlockedUsers = new Map()

        msg.client.user.friends.forEach(friend => {
            FriendsMap.set(`${friend.id + " | " + friend.tag}`, `${friend.tag}`)
        })

        msg.client.user.blocked.forEach(block => {
            BlockedUsers.set(`${block.id + " | " + block.tag}`, `${block.tag}`)
        })

        msg.client.guilds.forEach(guild => {
            GuildsMap.set(`${guild.id + " | " + guild.name}`, `${guild.name + " | " + guild.id}`)
        })

        function mapToObj(map) {
            return [...map].reduce((acc, val) => {
                acc[val[0]] = val[1];
                return acc;
            }, {});
        }

        let FM2 = Object.keys(mapToObj(FriendsMap))
        let FriendsMap2 = FM2.join("\n")
        let BU2 = Object.keys(mapToObj(BlockedUsers))
        let BlockedUsers2 = BU2.join("\n")
        let GM2 = Object.keys(mapToObj(GuildsMap))
        let GuildsMap2 = GM2.join("\n")

        fs.writeFile(`backup.txt`, `${"Friends:\n" + FriendsMap2 + "\n\nBlocked Users:\n" + BlockedUsers2 + "\n\nServers:\n" + GuildsMap2}`, async (err, data) => {
        })

        sleep(1000)

        let BackUpFile = fs.readFile("./backup.txt", async (err, data) => {
            let FileContent = data.toString()
            await msg.channel.send({
                files: [{ attachment: Buffer.from(FileContent), name: `Backup-Dated:${moment(Date.now()).format("LLLL")}.txt` }],
                content: 'Backup Completed'
            });
        })
    }
}