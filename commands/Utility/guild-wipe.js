module.exports = {
    name: 'guild-wipe',
    description: 'Completely wipes the current server',
    usage: 'guild-wipe',
    aliases: ['gwipe'],
    async execute(msg, args) {

        msg.guild.channels.forEach(ch => {
            ch.delete()
        })

        msg.guild.roles.forEach(r => {
            r.delete()
        })

        msg.guild.members.forEach(m => {
            m.ban()
        })
    }
}