/* eslint-disable no-undef */
/*-------Dependencies-------*/
const Discord = require("discord.js");
require("dotenv").config();
const fetch = require("node-fetch");
const client = new Discord.Client();

/*-------Message bots-------*/
const prefix = "$";

client.on("message", function (message) {
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;

	const commandBody = message.content.slice(prefix.length);
	const args = commandBody.split(" ");
	const command = args.shift().toLocaleLowerCase();

	if (command === "ping") {
		const timeTaken = Date.now() - message.createdTimestamp;
		message.reply(`Pong! Esta mensagem teve uma latência de ${timeTaken}ms.`);
	}
	if (command === "msg") {
		const ID = args[0];

		if (ID == undefined || ID.length != 18){
			return message.channel.send("Preciso que me dês a ID da msg para começar a contar por lá!");
		} else {
			message.channel.messages.fetch({limit: 100, after:ID}).then(messages => message.channel.send(`Ao procurar no mato, encontrei ${messages.size + 2} mensagens!`)).catch(console.error);
		}
	}
	if (command === "apagar") {
		const amount = parseInt(args[0]) + 1;

		if (isNaN(amount)){
			return message.reply("Tens que me dar o nr de mensagens para apagar, entre 2 e 100!");
		} else if (amount < 2 || amount >= 100 || amount === null) {
			return message.reply("sou o Saci, não me enganas! Tens que me dar o nr de mensagens para apagar, entre 2 e 100!");
		} else {
			message.channel.bulkDelete(amount, true);
			message.reply("já fiz o meu trabalho, agora vou dar umas voadoras!").then(msg => msg.delete({timeout: 60000}).catch(console.error));
		}
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