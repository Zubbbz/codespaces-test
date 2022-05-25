import DJS, { Intents } from 'discord.js'
import WOK from 'wokcommands'
import path from 'path'
import 'dotenv/config'

const client = new DJS.Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
})

client.on('ready', async () => {
	new WOK(client, {
		commandsDir: path.join(__dirname, 'commands'),
		featuresDir: path.join(__dirname, 'features'),
		testServers: ['800234484649820163'],
		typeScript: true,
	})
})

client.login(process.env.TOKEN);