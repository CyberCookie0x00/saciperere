/*-------Dependencies-------*/
const Discord = require("discord.js");
require("dotenv").config();
const fetch = require("node-fetch");

//Message when bot is ready
client.on("ready", () => {
  console.log("I am ready!");
});

/*-------Code for bot-------*/
client.on("message", (message) => {
  if (message.content === "ping") {
    message.reply("pong");
  }
});

// THIS  MUST  BE  THIS  WAY

/*--------24/7-------*/
setInterval(async () => {
  await fetch("https://saciperere.repl.co").then(console.log("Pinged"));
}, 240000);

/*-------Discord Connection-------*/
const client = new Discord.Client();
client.login(process.env.BOT_TOKEN);
