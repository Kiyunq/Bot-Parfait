const { MessageEmbed } = require('discord.js');
const config = require("../config")
const db = require('quick.db')
const cl = new db.table("Color")

module.exports = {
    name: 'support',
    usage: 'support',
    description: `Support commande.`,
    async execute(client, message, args) {

        let color = db.fetch(`color_${message.guild.id}`)
        if (color == null) color = config.app.color

        const embed = new MessageEmbed()
            .setColor(color)
            .setDescription(`Pour rejoindre notre support [cliquez ici](https://discord.gg/wazaaa) \n** Crédits : Wazaaa Reworked by Kiyun`)
            .setFooter({ text: `Wazaaa` })

        //message.reply({ content: ':white_check_mark:' })
        message.react('💎')
        message.member.send({ content: `https://discord.gg/Wazaaa`, embeds: [embed] });
    }
}
