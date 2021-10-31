const { RichEmbed } = require("discord.js");
const settings = require("./../../settings.json");
const fetch = require("node-fetch");

module.exports = {
    name: 'copy-guild',
    description: 'Copies the server provided',
    usage: "copy-guild",
    aliases: ['cguild'],
    async execute(msg, args) {

        function getimage(url) {
            return new Promise((resolve) => {
                fetch(url)
                    .then(response => response.buffer())
                    .then(buffer => resolve(buffer))
            })
        }

        function until(conditionFunction) {
            const poll = resolve => {
                if (conditionFunction()) resolve();
                else setTimeout(_ => poll(resolve), 400);
            }
            return new Promise(poll);
        }

        if (msg.guild) {
            var mainguild = msg.guild
            let embed = new RichEmbed()
                .setColor(settings.embedcolour)
                .setDescription(`**Duplicating the server...**`)
                .setTimestamp()

            msg.channel.send(embed)
            msg.delete()
            var guild = await msg.client.user.createGuild(mainguild.name, mainguild.region, (mainguild.iconURL !== null ? await getimage(mainguild.iconURL) : undefined))
            var categorys = {}
            guild.setAFKTimeout(mainguild.afkTimeout)
            var channels = mainguild.channels.array()
            var mroles = await mainguild.roles.array()
            var gchannels = guild.channels.array()
            var roles = {}
            gchannels.forEach(async channel => {
                channel.delete()
            });
            for (var i = 0; i < mroles.length; i++) {
                var role = mroles[i]
                if (role.id == mainguild.id) {
                    var nrole = await guild.defaultRole.edit({
                        name: role.name,
                        color: role.color,
                        hoist: role.hoist,
                        position: role.position,
                        permissions: role.permissions,
                        mentionable: role.mentionable
                    })
                    roles[role.id.toString()] = nrole
                } else {
                    var nrole = await guild.createRole({
                        name: role.name,
                        color: role.color,
                        hoist: role.hoist,
                        position: role.position,
                        permissions: role.permissions,
                        mentionable: role.mentionable
                    })
                    roles[role.id.toString()] = nrole
                }
            }
            await new Promise(async (resolve) => {
                var finished = 0
                var started = 0
                for (var i = 0; i < channels.length; i++) {
                    var channel = channels[i]
                    if (channel.type == "category") {
                        started++
                        var permissionOverwrites = []
                        channel.permissionOverwrites.array().forEach(perms => {
                            var role = roles[perms.id.toString()]
                            if (role) {
                                permissionOverwrites.push({
                                    id: roles[perms.id],
                                    allow: perms.allow,
                                    deny: perms.deny
                                })
                            }
                        })
                        var nchannel = await guild.createChannel(channel.name, {
                            permissionOverwrites: permissionOverwrites,
                            type: channel.type,
                            name: channel.name,
                            position: channel.position,
                            topic: channel.topic,
                            nsfw: channel.nsfw,
                            bitrate: channel.bitrate,
                            userLimit: channel.userLimit,
                            rateLimitPerUser: channel.rateLimitPerUser
                        })
                        categorys[channel.id.toString()] = nchannel
                        finished++
                        if (finished == started) {
                            resolve()
                        }
                    }
                }
            })
            channels.forEach(async channel => {
                if (channel.type != "category") {
                    var permissionOverwrites = []
                    channel.permissionOverwrites.array().forEach(perms => {
                        var role = roles[perms.id.toString()]
                        if (role) {
                            permissionOverwrites.push({
                                id: roles[perms.id],
                                allow: perms.allow,
                                deny: perms.deny
                            })
                        }
                    })
                    var parent
                    if (channel.parent) {
                        await until(_ => categorys[channel.parent.id] != undefined)
                        if (categorys[channel.parent.id]) {
                            parent = categorys[channel.parent.id]
                        }
                    }
                    var nchannel = await guild.createChannel(channel.name, {
                        parent: parent,
                        permissionOverwrites: permissionOverwrites,
                        type: channel.type,
                        name: channel.name,
                        position: channel.position,
                        topic: channel.topic,
                        nsfw: channel.nsfw,
                        userLimit: channel.userLimit,
                        rateLimitPerUser: channel.rateLimitPerUser
                    })
                }
            })
            await guild.roles.forEach(rol => {
                if (rol.name === roles[role.name]) {
                    rol.edit({ position: roles[role.position] })
                }
            })
        } else {
            let embed = new RichEmbed()
                .setColor("RED")
                .setDescription(`**This is not a server**`)
                .setTimestamp()
            msg.channel.send(embed)
        }
    }
}