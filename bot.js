// THIS BOT [ZUES] CREATED BY THE RARER RARE RANGER - 2018 - 2019©
// ==================================================================

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

// ==================================================================

client.on('ready', function(){//npm i ms 
  client.user.setStatus("dnd")
    var ms = 10000 ;
    var setGame = [`★ TG™ | MATRIX ★`,`★ CHANNELS : [${client.channels.size}] ★`,`★ THE GRID™ ★`];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`https://www.twitch.tv/TheRealPredvkill`);
    }, ms);

});

// ==================================================================

client.on("ready", async  => {
client.setInterval(async function(){
client.channels.get("543463470532788274").setName(`「`);
client.channels.get("543463470532788274").setName(`「T`);
client.channels.get("543463470532788274").setName(`「TH`);
client.channels.get("543463470532788274").setName(`「THE`);
client.channels.get("543463470532788274").setName(`「THE G`);
client.channels.get("543463470532788274").setName(`「THE GR`);
client.channels.get("543463470532788274").setName(`「THE GRI`);
client.channels.get("543463470532788274").setName(`「THE GRID`);
client.channels.get("543463470532788274").setName(`「THE GRID™」`);
client.channels.get("543463470532788274").setName(`「THE GRID`);
client.channels.get("543463470532788274").setName(`「THE GRI`);
client.channels.get("543463470532788274").setName(`「THE GR`);
client.channels.get("543463470532788274").setName(`「THE G`);
client.channels.get("543463470532788274").setName(`「THE`);
client.channels.get("543463470532788274").setName(`「TH`);
client.channels.get("543463470532788274").setName(`「T`);
client.channels.get("543463470532788274").setName(`「TH`);
client.channels.get("543463470532788274").setName(`「THE`);
client.channels.get("543463470532788274").setName(`「THE G`);
client.channels.get("543463470532788274").setName(`「THE GR`);
client.channels.get("543463470532788274").setName(`「THE GRI`);
client.channels.get("543463470532788274").setName(`「THE GRID`);
client.channels.get("543463470532788274").setName(`「THE GRID™」`);

  }, 20000);
});

// ==================================================================

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
    if(message.content.startsWith(prefix + "ZUES IS BACK ONLINE NOW")) {
    if(!message.channel.guild) return message.reply('**:x: This Command Only For Servers :x:**');
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('859900')
            .setTitle('**🚀 [ZUES] IS BACK ONLINE NOW & [UPDATED] 🚀** ')
	    .addField('``Bot Version :``' , `[ v1.1 ]` , true)
            .addField('``👑 Bot Owner 👑 :``' , `[<@480540559233122324>]` , true)
            .addField('``Bot Uptime :``', [timeCon(process.uptime())], true)
            .addField('``Bot Ping :``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``Bot RAM Usage :``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('``TG - Servers :``', [client.guilds.size], true)
            .addField('``TG - Channels :``' , `[ ${client.channels.size} ]` , true)
            .addField('``TG - Users :``' ,`[ ${client.users.size} ]` , true)
	    .addField('``TG Server Region :``' , `[ message.guild.region ]` , true)
            .addField('``Bot Name :``' , `[ ${client.user.tag} ]` , true)
            .addField('``Bot ID :``' , `[ ${client.user.id} ]` , true)
            .addField('``Bot Node :``' , `[${process.version} ]` , true)
                  .addField('``Bot Prefix :``' , `👑 [ FOR ADMINS ] 👑` , true)
                  .addField('``Bot Language :``' , `[ Java Script ]` , true)
                  .setFooter('● 🔰 [ THE GRID™ - OFFICIAL - 2019© ] 🔰 ●')
	          .setTimestamp()
	          .setDescription(`**:robot: ● Attention [The Grid™] Users 
[ZUES] Has Returned From The Darkness Aka Back Online
It Must Be Your Lucky Day ! ● ** `)

    })
}
});

client.on('ready', function(){
client.channels.get("542905235241304065").send("+ZUES IS BACK ONLINE NOW").then(m => m.delete(500));
		   
 });

// ==================================================================

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
    if(message.content.startsWith(prefix + "stats")) {
 if(!message.channel.guild) return message.reply('**:x: This Command Only For Servers :x:**');
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('859900')
            .setTitle('**[ZUES] STATS** ')
	    .addField('``Bot Version :``' , `[ v1.1 ]` , true)
            .addField('``👑 Bot Owner 👑 :``' , `[<@480540559233122324>]` , true)
            .addField('``Bot Uptime :``', [timeCon(process.uptime())], true)
            .addField('``Bot Ping :``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``Bot RAM Usage :``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('``TG - Servers :``', [client.guilds.size], true)
            .addField('``TG - Channels :``' , `[ ${client.channels.size} ]` , true)
            .addField('``TG - Users :``' ,`[ ${client.users.size} ]` , true)
	    .addField('``TG Server Region :``' , `[ message.guild.region ]` , true)
            .addField('``Bot Name :``' , `[ ${client.user.tag} ]` , true)
            .addField('``Bot ID :``' , `[ ${client.user.id} ]` , true)
            .addField('``Bot Node :``' , `[${process.version} ]` , true)
                  .addField('``Bot Prefix :``' , `👑 [ + ] 👑` , true)
                  .addField('``Bot Language :``' , `[ Java Script ]` , true)
                  .setFooter('● 🔰 [ THE GRID™ - OFFICIAL - 2019© ] 🔰 ●')
	          .setTimestamp()

    })
}
});

// ==================================================================

client.on('message', message => {
  var prefix ="+";
if(message.content.startsWith(prefix +"server")){
if(message.author.id !== "480540559233122324") return message.reply('**❎ | You Aren\'t The Bot Owner !**');
if(!message.channel.guild) return message.reply(' ');
const millis = new Date().getTime() - message.guild.createdAt.getTime();
const now = new Date();
dateFormat(now, 'dddd, mmmm dS, yyyy, h:MM:ss TT');
const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
const days = millis / 1000 / 60 / 60 / 24;
let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
var embed  = new Discord.RichEmbed()
.setAuthor(message.guild.name, message.guild.iconURL)
.setThumbnail(client.user.avatarURL)
.addField('**:robot: Bot Version** :' , `[ v1.1 ]`, true)
.addField("**🆔 Server ID** :", message.guild.id,true)
.addField("**📅 Created On** :", message.guild.createdAt.toLocaleString(),true)
.addField("**👑 Owned By** :",`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)
.addField("**👥 Members** :",`[${message.guild.memberCount}]`,true)
.addField('**💬 Channels** :',`**${message.guild.channels.filter(m => m.type === 'text').size}**` + ' text | Voice  '+ `**${message.guild.channels.filter(m => m.type === 'voice').size}** `,true)
.addField("**🌍 Others** :" , message.guild.region,true)
.addField("**🔐 Roles** :",`**[${message.guild.roles.size}]** Role `,true)
.setColor('RANDOM')
.setFooter('🔰 [ THE GRID™ - OFFICIAL ] 🔰')
.setTimestamp()
message.channel.sendEmbed(embed)

}
});

// ==================================================================

var version = '1.1';
client.on('message', message => {
if (message.content === prefix+'zeus'){
     if(!message.channel.guild) return message.reply('**:x: This Command Only For Servers :x:**');
var embed = new Discord.RichEmbed()
.setThumbnail(client.user.avatarURL)
.setAuthor(client.user.username, client.user.avatarURL)
.setDescription(`** Ping :** ${Date.now() - message.createdTimestamp}
 **Servers :** ${client.guilds.size}
 **Users :** ${client.users.size}
 **Channels :** ${client.channels.size}
 **RAM Usage :** ${(process.memoryUsage().rss / 1048576).toFixed()}MB
 **Discord.js :** v${version}
 **UpTime :** ${timeCon(process.uptime())}
 **Node :** ${process.version}`)
.setTimestamp()
.setFooter(`🔰 THE GRID™ - 2019© 🔰`, client.user.avatarURL)
    message.channel.sendEmbed(embed)
    console.log('[Bot] Send By: ' + message.author.username)
}
});

// ==================================================================

client.on('message',async message => {
  if(message.content.startsWith(prefix + "setdate")) {
      var currentTime = new Date(),
      years = currentTime.getFullYear(),
      month = currentTime.getMonth() + 1,
      day = currentTime.getDate(),
      week = currentTime.getDay();
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply(':x: **YOU DONT HAVE MANAGE CHANNELS ROLE** :x:');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply(':x: **THIS BOT DOSENT HAVE MANAGE CHANNELS ROLE** :x:');
  message.channel.send(' ✅ | DONE ! : ``WE CREATED CHANNEL VOICE WITH DATE COUNT !`` ');
  message.guild.createChannel("📅 - Date " + "「" + day + "-" + month + "-" + years + "」" , 'voice').then(c => {
    console.log(`Date channel setup for guild: \n ${message.guild.name}`);
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(function() {
      c.setName("Date : " + "「" + day + "-" + month + "-" + years + "」")
    },1000);
  });
  }
});

// ==================================================================

client.on('message',async message => {
    if(message.content.startsWith(prefix + "restart")) {
        if(message.author.id !== "480540559233122324") return message.reply('**❎ | You Aren\'t The Bot Owner !**');
        message.channel.send('**Restarting.**').then(msg => {
            setTimeout(() => {
               msg.edit('**:arrows_counterclockwise: Zeus Is Restarting Now..**').then(m => m.delete(5000));
            },1000);
            setTimeout(() => {
               msg.edit('**:arrows_counterclockwise: Zeus Is Restarting Now...**').then(m => m.delete(5000));
            },2000);
        });
        console.log(`${message.author.tag} [ ${message.author.id} ] Zeus Has Restarted Successfully.`);
        console.log(`Restarting..`);
        setTimeout(() => {
            client.destroy();
            client.login(process.env.BOT_TOKEN);
        },3000);
    }
})

// ==================================================================

client.login(process.env.BOT_TOKEN);
