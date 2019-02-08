const Discord = require('discord.js');
const music = require('discord.js-music-v11');


const Util = require('discord.js');

const getYoutubeID = require('get-youtube-id');

const fetchVideoInfo = require('youtube-info');

const YouTube = require('simple-youtube-api');


const queue = new Map();

const ytdl = require('ytdl-core');

const fs = require('fs');

const client = new Discord.Client({disableEveryone: true});

const prefix = "!";
 
Bot.on('ready', () => {
    console.log(`[Start] ${new Date()}`);
});


client.on("ready", async  => {
setInterval(function(){
client.channels.find('id', '543463470532788274').setName("T");
client.channels.find('id', '543463470532788274').setName("TH");
client.channels.find('id', '543463470532788274').setName("THE");
client.channels.find('id', '543463470532788274').setName("THE G");
client.channels.find('id', '543463470532788274').setName("THE GR");
client.channels.find('id', '543463470532788274').setName("THE GRI");
client.channels.find('id', '543463470532788274').setName("THE GRID");
client.channels.find('id', '543463470532788274').setName("THE GRID™");
client.channels.find('id', '543463470532788274').setName("THE GRID™ 2");
client.channels.find('id', '543463470532788274').setName("THE GRID™ 20");
client.channels.find('id', '543463470532788274').setName("THE GRID™ 207");
client.channels.find('id', '543463470532788274').setName("THE GRID™ 2077");

  }, 60000);
});

client.on('ready', () => {
var x = client.channels.get("543267866993229825");
if (x) x.join();
});
  
client.login(process.env.BOT_TOKEN);
