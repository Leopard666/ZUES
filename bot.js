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
client.channels.find('id', '543267866993229825').setName("F");
client.channels.find('id', '543267866993229825').setName("FA");
client.channels.find('id', '543267866993229825').setName("FAL");
client.channels.find('id', '543267866993229825').setName("FALL");
client.channels.find('id', '543267866993229825').setName("FALLE");
client.channels.find('id', '543267866993229825').setName("FALLEG");
client.channels.find('id', '543267866993229825').setName("FALLEGA");
client.channels.find('id', '543267866993229825').setName("FALLEGA T");
client.channels.find('id', '543267866993229825').setName("FALLEGA TE");
client.channels.find('id', '543267866993229825').setName("FALLEGA TEA");
client.channels.find('id', '543267866993229825').setName("FALLEGA TEAM");
  }, 60000);
});

client.on(`ready`, ()=>{
  client.setInterval(async function(){
    let ch = client.guilds.get("378453315123675138").channels;
    let count = 0;
    ch.forEach(async function(c){
      if(c.type === "voice"){
        c.members.forEach(()=>count++);
      }
    })
    setTimeout(function(){
      ch.get("533826952088387584").setName(`VOICE ⇏「${count}」`)//count = عدد الاشخاص
    }, 500)
  }, 1000)
})

client.on('ready', () => {
var x = client.channels.get("543267866993229825");
if (x) x.join();
});
  
client.login(process.env.BOT_TOKEN);

