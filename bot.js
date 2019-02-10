const Discord = require('discord.js');
const fs = require('fs');
const ms = require('ms');
const canvas = require('canvas-prebuilt');
const jimp = require('jimp');
const ytdl = require('ytdl-core');
const request = require('request');
const dateFormat = require('dateformat');
const google = require('google-it');
const db = require('quick.db');
const giphy = require('giphy-api')();    
const googl = require('goo.gl');  
const translate = require('google-translate-api');   
const { Client, Util } = require('discord.js');  
const UserBlocked = new Set(); 
const moment = require('moment');
const pretty = require('pretty-ms'); 
const zalgo = require('zalgolize');   
const math = require('math-expression-evaluator'); 
const stripIndents = require('common-tags').stripIndents;
const figlet = require('figlet');
const client = new Discord.Client();
const prefix = '+'
ti={}  
spee={};

  client.on('ready', function(){
  client.user.setStatus("dnd");
    var ms = 10000 ;
    var setActivity = ['★ TG | Matrix ★','The Grid™ | Server ' ];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setActivity.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setActivity[i],`https://www.twitch.tv/TheRealPredvkill`);
    }, ms);
});

client.on("ready", async  => {
setInterval(function(){
ch.get("533826952088387584").setName("T");
ch.get("533826952088387584").setName("TH");
ch.get("533826952088387584").setName("THE");
ch.get("533826952088387584").setName("THE G");
ch.get("533826952088387584").setName("THE GR");
ch.get("533826952088387584").setName("THE GRI");
ch.get("533826952088387584").setName("THE GRID");
ch.get("533826952088387584").setName("THE GRID™");
ch.get("533826952088387584").setName("THE GRID™ 2");
ch.get("533826952088387584").setName("THE GRID™ 20");
ch.get("533826952088387584").setName("THE GRID™ 207");
ch.get("533826952088387584").setName("THE GRID™ 2077");

  }, 60000);
});

client.on('message', message => {
  var prefix ="+";
if(message.content.startsWith(prefix +"server")){
if(message.author.id !== "480540559233122324") return message.reply('**❎ | You aren\'t The Bot Owner !**');
if(!message.channel.guild) return message.reply(' ');
const millis = new Date().getTime() - message.guild.createdAt.getTime();
const now = new Date();
dateFormat(now, 'dddd, mmmm dS, yyyy, h:MM:ss TT');
const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
const days = millis / 1000 / 60 / 60 / 24;
let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
var embed  = new Discord.RichEmbed()
.setAuthor(message.guild.name, message.guild.iconURL)
.addField("**🆔 Server ID:**", message.guild.id,true)
.addField("**📅 Created On**", message.guild.createdAt.toLocaleString(),true)
.addField("**👑 Owned by**",`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)
.addField("👥 Members ",`[${message.guild.memberCount}]`,true)
.addField('**💬 Channels **',`**${message.guild.channels.filter(m => m.type === 'text').size}**` + ' text | Voice  '+ `**${message.guild.channels.filter(m => m.type === 'voice').size}** `,true)
.addField("**🌍 Others **" , message.guild.region,true)
.addField("** 🔐 Roles **",`**[${message.guild.roles.size}]** Role `,true)
.setColor('#000000')
message.channel.sendEmbed(embed)

}
});


var version = '1.1';
client.on('message', message => {
if (message.content === prefix+'zeus'){
     if(!message.channel.guild) return message.reply('**:x: This Command Only For Servers :x:**');
var embed = new Discord.RichEmbed()//تا
    .setAuthor(client.user.username, client.user.avatarURL)
.setDescription(`** Ping :** ${Date.now() - message.createdTimestamp}
 **Servers :** ${client.guilds.size}
 **Users :** ${client.users.size}
 **Channels :** ${client.channels.size}
 **RAM Usage :** ${(process.memoryUsage().rss / 1048576).toFixed()}MB
 **Discord.js :** v${version}
 **UpTime :** ${timeCon(process.uptime())}
 **Node :** ${process.version}`)
     .setFooter('all copyrights reserved ©',client.user.avatarURL)
 .setFooter(`Fury Bot`, client.user.avatarURL)
    message.channel.sendEmbed(embed)
    console.log('[bot] Send By: ' + message.author.username)
}
});

function timeCon(time) {
    let days = Math.floor(time % 31536000 / 86400)
    let hours = Math.floor(time % 31536000 % 86400 / 3600)
    let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
    let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
    days = days > 9 ? days : '0' + days
    hours = hours > 9 ? hours : '0' + hours
    minutes = minutes > 9 ? minutes : '0' + minutes
    seconds = seconds > 9 ? seconds : '0' + seconds
    return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
}
var version = '1.1';
client.on('message', message => {
    if (message.content.startsWith(prefix + "stats")) {
if(message.author.id !== "480540559233122324") return message.reply('**❎ | You aren\'t The Bot Owner !**');
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .setTitle('``ZEUS STATS`` ')
            .addField('``Uptime``', [timeCon(process.uptime())], true)
            .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('``servers``', [client.guilds.size], true)
            .addField('``channels``' , `[ ${client.channels.size} ]` , true)
            .addField('``Users``' ,`[ ${client.users.size} ]` , true)
            .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
            .addField('``My ID``' , `[ ${client.user.id} ]` , true)
            .addField('``Node``' , `[${process.version} ]` , true)
                  .addField('``My Prefix``' , `+` , true)
                  .addField('``My Language``' , `[ Java Script ]` , true)
                  .setFooter('By | TheRareRanger')
    })
}
});


  client.on('message',async message => {
    if(message.content.startsWith(prefix + "restart")) {
        if(message.author.id !== "480540559233122324") return message.reply('**❎ | You aren\'t The Bot Owner !**');
        message.channel.send('**Restarting.**').then(msg => {
            setTimeout(() => {
               msg.edit('**:arrows_counterclockwise: ZEUS Restarting..**');
            },1000);
            setTimeout(() => {
               msg.edit('**:arrows_counterclockwise: ZEUS Restarting...**');
            },2000);
        });
        console.log(`${message.author.tag} [ ${message.author.id} ] C.L.U Has Restarted Successfully.`);
        console.log(`Restarting..`);
        setTimeout(() => {
            client.destroy();
            client.login('process.env.BOT_TOKEN');
        },3000);
    }
});

  
client.login(process.env.BOT_TOKEN);
