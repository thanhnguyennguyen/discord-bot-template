const path = require('path')
require('dotenv').config({
    path: path.resolve(__dirname, './.env')
})

const Discord = require('discord.js'); //import discord.js

const client = new Discord.Client(); //create new client

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async msg => {
    switch (msg.content) {
      case "ping":
        msg.reply("Pong!");
        break;
      //our meme command below
      case "!meme":
        msg.channel.send("Here's your meme!"); //Replies to user command
        // const img = await getMeme(); //fetches an URL from the API
        // msg.channel.send(img); //send the image URL
        break;
     }
  })

//make sure this line is the last line
client.login(process.env.CLIENT_TOKEN); //login bot using token

