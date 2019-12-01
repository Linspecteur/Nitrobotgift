const Discord = require('discord.js'); //Ce que le bot à besoin /
const GuildChannel = require('./GuildChannel');
const { browser } = require('../util/Constants');
const Permissions = require('../util/Permissions');
const Collection = require('../util/Collection');
const { Error } = require('../errors');

const client = new Discord.Client(); //Que votre Bot est un nouvel utilisateur

var prefix = "*"; //Prefix de votre Bot ( *play www.youtube.com/ )

client.login(process.env.token); //Token (Série de chiffre) propre a chaque Bot

client.on("ready", () => { //Signifie que le bot à bien démarré
    console.log("Je suis prêt !"); //Lorsque que le bot est lancé observer la console Visual Studio
    client.user.setGame("L'ELITE🌟 20 invites = 1 Nitro"); //Voir le Jeu sur le Discord
});
client.on('ready', () => {
  let channel = client.channels.get('648947895416127525');
  channel.join()
});

client.on('message', message => {
    // Voice only works in guilds, if the message does not come from a guild,
    // we ignore it
    if (!message.guild) return;
  
    if (message.content === '+join') {
      // Only try to join the sender's voice channel if they are in one themselves
      if (message.member.voiceChannel) {
        message.member.voiceChannel.join()
          .then(connection => { // Connection is an instance of VoiceConnection
            message.reply("L'ELITE🌟\nJ'ai rejoinds le canal.");
          })
          .catch(console.log);
      } else {
        message.reply("L'ELITE🌟\nTu dois etre dans un canal.");
      }
    }
  });
