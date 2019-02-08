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

const prefix = "+";
 
Bot.on('ZEUS IS READY NOW !', () => {
    console.log(`[Start] ${new Date()}`);
});


client.on('ready', function(){
  client.user.setStatus("dnd");
    var ms = 10000 ;
    var setGame = ['★ TG | Matrix ★','The Grid™ | Server ' ];
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

client.on('ZEUS IS READY', () => {
var x = client.channels.get("543463470532788274");
if (x) x.join();
});
  
client.login(process.env.BOT_TOKEN);
