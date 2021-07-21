const discord = require("discord.js");

module.exports = {
  name: "invite",
  category: "info",
  description: "INVITE pipobot v1",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setTitle(`INVITA AL`)
    .setDescription(`✅ [CLICK AQUÍ](https://discord.com/oauth2/authorize?client_id=865365140420165642&scope=bot&permissions=8) O [SERVIDOR DE SOPORTE ](https://discord.gg/8UF8EGbsY3)`)
    .setColor("RANDOM")
    .setFooter(`creado por fall `)
    .setTimestamp(message.timestamp = Date.now())
    
    message.channel .send(embed)
    
  
  }
}