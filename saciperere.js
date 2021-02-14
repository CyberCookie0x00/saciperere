/*-------Dependencies-------*/
const Discord = require("discord.js");
require("dotenv").config();
const fetch = require("node-fetch");
const client = new Discord.Client();

/*-------Message bots-------*/
const prefix = "$";

client.on("message", function(message) {
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;

	const commandBody = message.content.slice(prefix.length);
	const args = commandBody.split(" ");
	const command = args.shift().toLocaleLowerCase();
  
	if(command === "ping") {
		const timeTaken = Date.now() - message.createdTimestamp;
		message.reply(`Pong! Esta mensagem teve uma latência de ${timeTaken}ms.`);
	}
});

//Message when bot is ready
client.on("ready", () => {
	console.log("I am ready!");
});

/*-------Code for bot-------*/


// THIS  MUST  BE  THIS  WAY

/*--------24/7-------*/
setInterval(async () => {
	await fetch("https://saciperere.repl.co").then(console.log("Pinged"));
}, 240000);

/*-------Discord Connection-------*/
client.login(process.env.BOT_TOKEN);