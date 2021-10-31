module.exports = (oldMsg, newMsg) => {
    if (oldMsg.author.bot) return;

    oldMsg.client.editMsgBefore.set(`${oldMsg.channel.id}`, oldMsg)
    oldMsg.client.editMsgAfter.set(`${oldMsg.channel.id}`, newMsg)
}