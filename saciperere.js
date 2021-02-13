const Discord = require('discord.js');
require('dotenv').config();
const fetch = require('node-fetch')

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

setInterval(async () => {
    await fetch('https://saciperere.repl.co').then(console.log('Pinged'));
}, 240000);


client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret