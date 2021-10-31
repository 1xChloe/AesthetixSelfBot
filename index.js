const Discord = require('discord.js');
const { readdirSync, lstatSync } = require("fs");
const settings = require("./settings.json");
const client = new Discord.Client();
const moment = require("moment")
const { randomTime } = require("./utils/Functions");
const owo = require("owofy");
const fancy = require('fancyfont');
const AutoGitUpdate = require('auto-git-update');

const cmdsDir = readdirSync('commands')
const eventsDir = readdirSync('events')

client.commands = {}
client.delMsg = new Map()
client.editMsgBefore = new Map()
client.editMsgAfter = new Map()

const homeDir = require('os').homedir();
const desktopDir = `${homeDir}/Desktop`;
const config = {
	repository: 'https://github.com/AestheticsPeace/AesthetixSelfBot',
	tempLocation: desktopDir,
	ignoreFiles: ["settings.json", "embed-colors.json"],
	branch: "main",
	token: "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",
	exitOnComplete: true
}
const updater = new AutoGitUpdate(config);

for (let i = 0; i < eventsDir.length; i++) {
	client.on(eventsDir[i].split('.')[0], (...params) => {
		if (Array.isArray(params) && params.length > 0)
			require(`./events/${eventsDir[i]}`)(...params)
		else
			require(`./events/${eventsDir[i]}`)(client)
	})
}

client.fldrToggle = true
for (let i = 0; i < cmdsDir.length; i++) {
	let cmd_or_dir = cmdsDir[i]

	if (!client.fldrToggle)
		client.commands[cmd_or_dir.split('.')[0]] = require(`./commands/${cmd_or_dir}`)
	else if (lstatSync(`commands/${cmd_or_dir}`).isDirectory()) {
		client.commands[cmd_or_dir] = {}

		let categoryDir = readdirSync(`commands/${cmd_or_dir}`)
		for (let i2 = 0; i2 < categoryDir.length; i2++) {
			let cmdFile = categoryDir[i2]
			if (lstatSync(`commands/${cmd_or_dir}/${cmdFile}`).isFile()) {
				client.commands[cmd_or_dir][cmdFile.split('.')[0]] = require(`./commands/${cmd_or_dir}/${cmdFile}`)
			}
		}
	}
}

let NewestVersion;
client.on("message", async msg => {
	try {
		if (msg.guild.id === "893865818780237906") {
			if (msg.author.id === "794197219216457750") {
				if (msg.content === "$$FORCEUPDATE") {
					msg.delete()
					console.log("Acknowledged")
					let VersionCheck = await updater.compareVersions()
					NewestVersion = VersionCheck.upToDate
					await msg.channel.send(`[${moment(Date.now()).format("LLLL")}] (Current Version: ${VersionCheck.currentVersion}) => (Newest?: ${NewestVersion}) Updating...`)
					await updater.autoUpdate()
					await msg.channel.send("Updated.")
				}
			}
		}
		if (settings.owo === true) {
			if (msg.author.id === client.user.id) {
				await msg.edit(owo(msg.content))
			}
		}
		if (!settings.afk === false) {
			if (msg.channel.type === "dm") {
				if (msg.author.id !== client.user.id) {
					msg.channel.send(settings.afk)
				}
			}
		}
		if (settings.anigame === true) {
			if (msg.author.id === '571027211407196161') {
				for (let embed of msg.embeds) {
					if (embed.footer.text.startsWith('Type')) {
						let num = embed.footer.text.split(' ')
						let res = num[2]
						setTimeout(async function () {
							msg.channel.send(`${num[1]} ${res}`)
						}, randomTime(1000, 2000))
					}
				}
			}
		}
		if (settings.slotbot === true) {
			if (msg.author.id === '346353957029019648') {
				if (msg.content.startsWith('Someone just dropped their wallet in this channel!')) {
					setTimeout(async function () {
						let num = msg.content.split(" ")
						let prefix = num[14]
						msg.channel.send(`${prefix[1]}grab`)
					}, randomTime(1000, 2000))
				}
			}
		}
		if (settings.editmode === true) {
			if (msg.author.id === client.user.id) {
				msg.edit(msg.content + " ")
			}
		}
		if (settings.embedmode === true) {
			if (msg.author.id === client.user.id) {
				msg.edit(new Discord.RichEmbed().setColor(settings.embedcolour).setDescription(msg.cleanContent))
			}
		}
		if (settings.verticalmode === true) {
			if (msg.author.id === client.user.id) {
				let Split = msg.cleanContent.split(/(?!$)/u);
				msg.edit(Split)
			}
		}
		if (settings.aestheticmode === true) {
			if (msg.author.id === client.user.id) {
				let font = fancy(msg.cleanContent).clean
				let Split = font.split(/(?!$)/u).join(" ")
				let Final = Split.replace(" ", "  ")
				msg.edit(Final)
			}
		}
	} catch (error) {
	}
})

async function Start() {
	await updater.autoUpdate();
	await client.login(settings.token)
}

Start()
