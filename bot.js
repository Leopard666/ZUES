const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");
const Canvas = require("canvas");
const jimp = require("jimp");
const moment = require('moment');
const yt = require('ytdl-core');
const prefix = '>'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(">help | >inv");
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});



client.on("ready", async  => {
setInterval(function(){
client.channels.find('543463470532788274').setName("T");
client.channels.find('543463470532788274').setName("TH");
client.channels.find('543463470532788274').setName("THE");
client.channels.find('543463470532788274').setName("THE G");
client.channels.find('543463470532788274').setName("THE GR");
client.channels.find('543463470532788274').setName("THE GRI");
client.channels.find('543463470532788274').setName("THE GRID");
client.channels.find('543463470532788274').setName("THE GRID™");
client.channels.find('543463470532788274').setName("THE GRID™ 2");
client.channels.find('543463470532788274').setName("THE GRID™ 20");
client.channels.find('543463470532788274').setName("THE GRID™ 207");
client.channels.find('543463470532788274').setName("THE GRID™ 2077");

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


var version = '11.0.0';
client.on('message', message => {
if (message.content === prefix+'bot'){
     if(!message.channel.guild) return message.reply('** This command only for servers**');
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
client.on('message', message => {
    if (message.content.startsWith(prefix + "info")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .setTitle('``INFO Fury Bot`` ')
            .addField('``Uptime``', [timeCon(process.uptime())], true)
            .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('``servers``', [client.guilds.size], true)
            .addField('``channels``' , `[ ${client.channels.size} ]` , true)
            .addField('``Users``' ,`[ ${client.users.size} ]` , true)
            .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
            .addField('``My ID``' , `[ ${client.user.id} ]` , true)
                  .addField('``My Prefix``' , `>` , true)
                  .addField('``My Language``' , `[ Java Script ]` , true)
                  .setFooter('By | iiTzEnd')
    })
}
});


client.on('message', message => {
                                if(!message.channel.guild) return;
                        if (message.content.startsWith('+ping')) {
                        if(message.author.id !== "480540559233122324") return message.reply('**❎ | You aren\'t The Bot Owner !**');
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setThumbnail('https://cdn.discordapp.com/avatars/368141321547808768/c42716e13cb850f9ad0930af699472d0.png?size=2048nk')
                        .setColor('#8258FA')
                        .addField('**Ping:**',msg + " ms")
message.channel.send({embed:embed});
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
