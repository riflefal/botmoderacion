const discord = require("discord.js");

module.exports = {
  name: "ban",
  category: "moderation",
  description: "Banea a cualquiera sin motivo alguno",
  usage: "ban <@user> <reason>",
  run: async (client, message, args) => {
    
    const target = message.mentions.members.first()
    
    const reason = args.slice(1).join(" ")
    
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply(`No tienes permisos para banear a alguien`)
    
    if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.reply(`No tengo permisos para banear a alguien`)
    
    if(!args[0]) return message.reply(`Da una razòn para el baneo`)
    
    if(!target) return message.reply(`No puedo encontrar a ese miembro`)
    
    if(target.roles.highest.position >= message.member.roles.highest.position || message.author.id !== message.guild.owner.id) {
      return message.reply(`They have more power than you`)
    }
    
    if(target.id === message.author.id) return message.reply(`No te podes autobanear, sos el ADMIN`)
    
    if(target.bannable) {
      let embed = new discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`Banned \`${target}\` for \`${reason || "No Reason Provided"}\``)
      
      message.channel.send(embed)
      
      target.ban()
      
      message.delete()
      
    } else {
      return message.reply(`No puedo hacer eso, su rol es mayor al mio`)
    }
    return undefined
  }
};
