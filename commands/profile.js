const profileModel = require('../database/models/profileSchema')

module.exports = {
  name: "profile",
  aliases: [],
  permissions: [],
  description: "Checks the user profile",

  async execute(client, message, args, Discord, profileData) {
    const target = message.mentions.users.first() || message.author
    const targetId = target.id
    const prefix = process.env.PREFIX
    const guildId = message.guild.id
    const userId = targetId
    const profile = await profileModel.findOne({ guildId, userId, })

    if (profile) {
      const zodiac = profile.zodiac

      if (zodiac === "Aries") {
        const sign = `<:stararies:865387541057634304> ${zodiac} <:stararies:865387541057634304>`

        let url = client.users.fetch(userId);
        url.then(function (targetURL) {
          var imgURL = targetURL.displayAvatarURL();
          let embed = new Discord.MessageEmbed()
            .setColor("PURPLE")
            .setAuthor(`${message.author.username}#${message.author.discriminator}`, `${imgURL}`)
            .addField(`${target.username} has set **${sign}**`, `**as their star sign!**`)
            .setThumbnail("https://i.imgur.com/XXvJxTR.png")
            .setTimestamp()
          message.channel.send(embed)
        })
      }
      if (zodiac === "Taurus") {
        const sign = `<:startaurus:865387578273038336> ${zodiac} <:startaurus:865387578273038336>`

        let url = client.users.fetch(userId);
        url.then(function (targetURL) {
          var imgURL = targetURL.displayAvatarURL();
          let embed = new Discord.MessageEmbed()
            .setColor("PURPLE")
            .setAuthor(`${message.author.username}#${message.author.discriminator}`, `${imgURL}`)
            .addField(`${target.username} has set **${sign}**`, `**as their star sign!**`)
            .setThumbnail("https://i.imgur.com/EjtD6Xi.png")
            .setTimestamp()
          message.channel.send(embed)
        })
      }
      if (zodiac === "Gemini") {
        const sign = `<:stargemini:865387618828550174> ${zodiac} <:stargemini:865387618828550174>`

        let url = client.users.fetch(userId);
        url.then(function (targetURL) {
          var imgURL = targetURL.displayAvatarURL();
          let embed = new Discord.MessageEmbed()
            .setColor("PURPLE")
            .setAuthor(`${message.author.username}#${message.author.discriminator}`, `${imgURL}`)
            .addField(`${target.username} has set **${sign}**`, `**as their star sign!**`)
            .setThumbnail("https://i.imgur.com/6FkeiSG.png")
            .setTimestamp()
          message.channel.send(embed)
        })
      }
      if (zodiac === "Cancer") {
        const sign = `<:starcancer:865387653586223105>  ${zodiac} <:starcancer:865387653586223105> `

        let url = client.users.fetch(userId);
        url.then(function (targetURL) {
          var imgURL = targetURL.displayAvatarURL();
          let embed = new Discord.MessageEmbed()
            .setColor("PURPLE")
            .setAuthor(`${message.author.username}#${message.author.discriminator}`, `${imgURL}`)
            .addField(`${target.username} has set **${sign}**`, `**as their star sign!**`)
            .setThumbnail("https://i.imgur.com/T9Iuvsi.png")
            .setTimestamp()
          message.channel.send(embed)
        })
      }
      if (zodiac === "Leo") {
        const sign = `<:starleo:865387705160695828> ${zodiac} <:starleo:865387705160695828>`

        let url = client.users.fetch(userId);
        url.then(function (targetURL) {
          var imgURL = targetURL.displayAvatarURL();
          let embed = new Discord.MessageEmbed()
            .setColor("PURPLE")
            .setAuthor(`${message.author.username}#${message.author.discriminator}`, `${imgURL}`)
            .addField(`${target.username} has set **${sign}**`, `**as their star sign!**`)
            .setThumbnail("https://i.imgur.com/1ZhXUms.png")
            .setTimestamp()
          message.channel.send(embed)
        })
      }
      if (zodiac === "Virgo") {
        const sign = `<:starvirgo:865387756195545108> ${zodiac} <:starvirgo:865387756195545108>`

        let url = client.users.fetch(userId);
        url.then(function (targetURL) {
          var imgURL = targetURL.displayAvatarURL();
          let embed = new Discord.MessageEmbed()
            .setColor("PURPLE")
            .setAuthor(`${message.author.username}#${message.author.discriminator}`, `${imgURL}`)
            .addField(`${target.username} has set **${sign}**`, `**as their star sign!**`)
            .setThumbnail("https://i.imgur.com/MpB3bfc.png")
            .setTimestamp()
          message.channel.send(embed)
        })
      }
      if (zodiac === "Libra") {
        const sign = `<:starlibra:865387794469748796> ${zodiac} <:starlibra:865387794469748796>`

        let url = client.users.fetch(userId);
        url.then(function (targetURL) {
          var imgURL = targetURL.displayAvatarURL();
          let embed = new Discord.MessageEmbed()
            .setColor("PURPLE")
            .setAuthor(`${message.author.username}#${message.author.discriminator}`, `${imgURL}`)
            .addField(`${target.username} has set **${sign}**`, `**as their star sign!**`)
            .setThumbnail("https://i.imgur.com/OWgblqx.png")
            .setTimestamp()
          message.channel.send(embed)
        })
      }
      if (zodiac === "Scorpio") {
        const sign = `<:starscorpio:865387858629754900>  ${zodiac} <:starscorpio:865387858629754900> `

        let url = client.users.fetch(userId);
        url.then(function (targetURL) {
          var imgURL = targetURL.displayAvatarURL();
          let embed = new Discord.MessageEmbed()
            .setColor("PURPLE")
            .setAuthor(`${message.author.username}#${message.author.discriminator}`, `${imgURL}`)
            .addField(`${target.username} has set **${sign}**`, `**as their star sign!**`)
            .setThumbnail("https://i.imgur.com/of8krp5.png")
            .setTimestamp()
          message.channel.send(embed)
        })
      }
      if (zodiac === "Sagittarius") {
        const sign = `<:starsagittarius:865387909421989920>  ${zodiac} <:starsagittarius:865387909421989920> `

        let url = client.users.fetch(userId);
        url.then(function (targetURL) {
          var imgURL = targetURL.displayAvatarURL();
          let embed = new Discord.MessageEmbed()
            .setColor("PURPLE")
            .setAuthor(`${message.author.username}#${message.author.discriminator}`, `${imgURL}`)
            .addField(`${target.username} has set **${sign}**`, `**as their star sign!**`)
            .setThumbnail("https://i.imgur.com/KEQ0EHy.png")
            .setTimestamp()
          message.channel.send(embed)
        })
      }
      if (zodiac === "Capricorn") {
        const sign = `<:starcapricorn:865387944013332490> ${zodiac} <:starcapricorn:865387944013332490>`

        let url = client.users.fetch(userId);
        url.then(function (targetURL) {
          var imgURL = targetURL.displayAvatarURL();
          let embed = new Discord.MessageEmbed()
            .setColor("PURPLE")
            .setAuthor(`${message.author.username}#${message.author.discriminator}`, `${imgURL}`)
            .addField(`${target.username} has set **${sign}**`, `**as their star sign!**`)
            .setThumbnail("https://i.imgur.com/3wRGfzp.png")
            .setTimestamp()
          message.channel.send(embed)
        })
      }
      if (zodiac === "Aquarius") {
        const sign = `<:staraquarius:865388201819897867>  ${zodiac} <:staraquarius:865388201819897867> `

        let url = client.users.fetch(userId);
        url.then(function (targetURL) {
          var imgURL = targetURL.displayAvatarURL();
          let embed = new Discord.MessageEmbed()
            .setColor("PURPLE")
            .setAuthor(`${message.author.username}#${message.author.discriminator}`, `${imgURL}`)
            .addField(`${target.username} has set **${sign}**`, `**as their star sign!**`)
            .setThumbnail("https://i.imgur.com/PoQA4yU.png")
            .setTimestamp()
          message.channel.send(embed)
        })
      }
      if (zodiac === "Pisces") {
        const sign = `<:starpisces:865388257797603368> ${zodiac} <:starpisces:865388257797603368>`

        let url = client.users.fetch(userId);
        url.then(function (targetURL) {
          var imgURL = targetURL.displayAvatarURL();
          let embed = new Discord.MessageEmbed()
            .setColor("PURPLE")
            .setAuthor(`${message.author.username}#${message.author.discriminator}`, `${imgURL}`)
            .addField(`${target.username} has set **${sign}**`, `**as their star sign!**`)
            .setThumbnail("https://i.imgur.com/A6c9HtG.png")
            .setTimestamp()
          message.channel.send(embed)
        })
      }
    } else {
      let url = client.users.fetch(userId);
      url.then(function (targetURL) {
        var imgURL = targetURL.displayAvatarURL();
        let embed = new Discord.MessageEmbed()
          .setColor("PURPLE")
          .setAuthor(`${message.author.username}#${message.author.discriminator}`, `${imgURL}`)
          .addField(`${target.username} Please set your star`, `**sign using \`${prefix}set\`**`)
          .setThumbnail("https://i.imgur.com/mLCs0OZ.png")
          .setTimestamp()
        message.channel.send(embed)
      })
      return
    }
  }
}