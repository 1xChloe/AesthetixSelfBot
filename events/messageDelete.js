module.exports = (msg) => {
    if (msg.author.bot) return
    msg.client.delMsg.set(`${msg.channel.id}`, msg)
}