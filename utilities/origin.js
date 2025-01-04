const { MessageEmbed } = require('discord.js');
const config = require("../config")
const db = require('quick.db')
const cl = new db.table("Color")

module.exports = {
    name: 'origin',
    usage: 'origin',
    description: `Afficher le repository GitHub de l'origine de ce bot.`,
    async execute(client, message, args) {

        let color = db.fetch(`color_${message.guild.id}`)
        if (color == null) color = config.app.color

        const embed = new MessageEmbed()
            .setColor(color)
            .setDescription(`.gg/wazaa`)
            .setFooter({ text: `Wazaaa` })

        message.reply({ content: '<:boost:1117346767139254282> Veuillez verifier vos ***DMs*** !' }) 
        message.react('💎')
        message.member.send({ content: `https://discord.gg/wazaaa`, embeds: [embed] });
    }
}
