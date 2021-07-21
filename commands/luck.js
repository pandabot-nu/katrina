const Discord = require('discord.js')
const capFor = require("../util/cap.json")
const aquFor = require("../util/aqu.json")
const pisFor = require("../util/pis.json")
const ariFor = require("../util/ari.json")
const tauFor = require("../util/tau.json")
const gemFor = require("../util/gem.json")
const canFor = require("../util/can.json")
const leoFor = require("../util/leo.json")
const virFor = require("../util/vir.json")
const libFor = require("../util/lib.json")
const scoFor = require("../util/sco.json")
const sagFor = require("../util/sag.json")
const profileModel = require("../database/models/profileSchema")
const luck = require("../util/items.json")
const prizes = require("../util/prizes.json")
const option = require("../util/option.json")

module.exports = {
    name: "luck",
    description: "Imparts a fortune onto a user",
    cooldown: 0,

    async execute(client, message, args, Discord) {
        const guildId = message.guild.id
        const userId = message.author.id
        const profile = await profileModel.findOne({ guildId, userId })
        if (profile) {
            const zodiac = profile.zodiac


            if (zodiac === "Capricorn") {

                const fortune = capFor[Math.floor(Math.random() * capFor.length)]
                let fortuneEmbed = new Discord.MessageEmbed()
                    .setTitle("🔮 Katrina has seen in the Star Matrix.... 🔮")
                    .addField(`${fortune}`, '\u200B')
                    .setFooter("🔮 Katrina takes no responsibility for what may befall you from ignoring your fortune... 🔮")
                    .setThumbnail("https://i.imgur.com/Z7ZDjR1.gif")
                    .setColor("RANDOM")

                const lucky = luck[Math.floor(Math.random() * luck.length)]
                const options = option[Math.floor(Math.random() * option.length)]
                let luckEmbed = new Discord.MessageEmbed()
                    .setTitle("🔮 Katrina has seen in the Star Matrix.... 🔮")
                    .addField(`From this place I can see the signs. Oh yes, I can...,`, `I see good fortune upon ${options}...`)
                    .addField(`${lucky}...`, `**This item will be the key to truly unlocking your good fortune...**`)
                    .setFooter("🔮 Katrina takes no responsibility for what may befall you from ignoring your fortune... 🔮")
                    .setThumbnail("https://i.imgur.com/Z7ZDjR1.gif")
                    .setColor("RANDOM")

                let unluckEmbed = new Discord.MessageEmbed()
                    .setTitle("🔮 Katrina has seen in the Star Matrix.... 🔮")
                    .addField(`From this place I can see the signs. Oh yes, I can...,`, `I see disaster upon ${options}...`)
                    .addField(`${lucky}...`, `**This item will be the key to narrowly avoiding impending disaster...**`)
                    .setFooter("🔮 Katrina takes no responsibility for what may befall you from ignoring your fortune... 🔮")
                    .setThumbnail("https://i.imgur.com/Z7ZDjR1.gif")
                    .setColor("RANDOM")

                const prize = prizes[Math.floor(Math.random() * prizes.length)]
                let prizeEmbed = new Discord.MessageEmbed()
                    .setTitle("🔮 Katrina has seen in the Star Matrix.... 🔮")
                    .addField(`Good fortune has smiled on you today...`, `You have 24 hours to claim ${prize}`)
                    .setFooter("🔮 Katrina takes no responsibility for what may befall you from ignoring your fortune... 🔮")
                    .setThumbnail("https://i.imgur.com/Z7ZDjR1.gif")
                    .setColor("RANDOM")

                const embeds = [fortuneEmbed, luckEmbed, unluckEmbed, prizeEmbed]
                let embed = embeds[Math.floor(Math.random() * embeds.length)]
                message.channel.send(embed)
            }
        }
    }
}