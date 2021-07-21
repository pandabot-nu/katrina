const profileModel = require('../database/models/profileSchema')

module.exports = {
    name: "set",
    aliases: [],
    cooldown: 0,
    description: "Set your star sign to get your fortune told by Katrina!",
    usage: "[month date] i.e 5 4 (May 4)",
    async execute(client, message, args, Discord, profileData) {

        const guildId = message.guild.id
        const userId = message.author.id

        const zodiacs = args.join('')
        console.log(zodiacs)

        if(!zodiacs){
            let url = client.users.fetch(userId);
      url.then(function (targetURL) {
        var imgURL = targetURL.displayAvatarURL();
        let embed = new Discord.MessageEmbed()
          .setColor("PURPLE")
          .setAuthor(`${message.author.username}#${message.author.discriminator}`, `${imgURL}`)
          .addField(`${message.author.username} Please set your star sign in`, `**Month Day format. i.e. 5 4 for May 4**`)
          .setThumbnail("https://i.imgur.com/mLCs0OZ.png")
          .setTimestamp()
        message.channel.send(embed)
      })
      return
        }

        if (zodiacs >= 11 <= 119 || zodiacs >= 1222) {
            const zodiac = "Capricorn"
            console.log(zodiac)

            const zodiacProfile = await profileModel.findOne(
                {
                    guildId,
                    userId
                })

            if (zodiacProfile) {

                await profileModel.findOneAndUpdate(
                    {
                        guildId,
                        userId,
                        zodiac
                    })
            } else {
                await new profileModel({
                    guildId,
                    userId,
                    zodiac
                }).save()
            }
            let url = client.users.fetch(userId);
            url.then(function (targetURL) {
                var imgURL = targetURL.displayAvatarURL();
                let embed = new Discord.MessageEmbed()
                    .setColor("PURPLE")
                    .setAuthor(`${message.author.username}`, `${imgURL}`)
                    .setDescription(`Your star sign has been set to ${zodiac}. You may now request your fortune from Katrina. If this is incorrect, please run the command and try again...`)
                    .setTimestamp()
                    .setThumbnail("https://i.imgur.com/wYDvY67.jpg")
    
                message.channel.send(embed)
    
            })
        }
        if (zodiacs >= 120 && zodiacs <= 218) {
            const zodiac = "Aquarius"
            console.log(zodiac)

            const zodiacProfile = await profileModel.findOne(
                {
                    guildId,
                    userId
                })

            if (zodiacProfile) {
                try {
                    await profileModel.findOneAndUpdate(
                        {
                            guildId,
                            userId,
                            zodiac
                        })
                } catch (err) {
                    console.log(err)
                }
            } else {
                await new profileModel({
                    guildId,
                    userId,
                    zodiac
                }).save()
            }
            let url = client.users.fetch(userId);
        url.then(function (targetURL) {
            var imgURL = targetURL.displayAvatarURL();
            let embed = new Discord.MessageEmbed()
                .setColor("PURPLE")
                .setAuthor(`${message.author.username}`, `${imgURL}`)
                .setDescription(`Your star sign has been set to ${zodiac}. You may now request your fortune from Katrina. If this is incorrect, please run the command and try again...`)
                .setTimestamp()
                .setThumbnail("https://i.imgur.com/wYDvY67.jpg")

            message.channel.send(embed)

        })
        }
        if (zodiacs >= 219 && zodiacs <= 320) {
            const zodiac = "Pisces"
            console.log(zodiac)

            const zodiacProfile = await profileModel.findOne(
                {
                    guildId,
                    userId
                })

            if (zodiacProfile) {

                await profileModel.findOneAndUpdate(
                    {
                        guildId,
                        userId,
                        zodiac
                    })
            } else {
                await new profileModel({
                    guildId,
                    userId,
                    zodiac
                }).save()
            }
            let url = client.users.fetch(userId);
            url.then(function (targetURL) {
                var imgURL = targetURL.displayAvatarURL();
                let embed = new Discord.MessageEmbed()
                    .setColor("PURPLE")
                    .setAuthor(`${message.author.username}`, `${imgURL}`)
                    .setDescription(`Your star sign has been set to ${zodiac}. You may now request your fortune from Katrina. If this is incorrect, please run the command and try again...`)
                    .setTimestamp()
                    .setThumbnail("https://i.imgur.com/wYDvY67.jpg")

                message.channel.send(embed)

            })
        }
        if (zodiacs >= 321 && zodiacs <= 419) {
            const zodiac = "Aries"
            console.log(zodiac)

            const zodiacProfile = await profileModel.findOne(
                {
                    guildId,
                    userId
                })

            if (zodiacProfile) {

                await profileModel.findOneAndUpdate(
                    {
                        guildId,
                        userId,
                        zodiac
                    })
            } else {
                await new profileModel({
                    guildId,
                    userId,
                    zodiac
                }).save()
            }
            let url = client.users.fetch(userId);
            url.then(function (targetURL) {
                var imgURL = targetURL.displayAvatarURL();
                let embed = new Discord.MessageEmbed()
                    .setColor("PURPLE")
                    .setAuthor(`${message.author.username}`, `${imgURL}`)
                    .setDescription(`Your star sign has been set to ${zodiac}. You may now request your fortune from Katrina. If this is incorrect, please run the command and try again...`)
                    .setTimestamp()
                    .setThumbnail("https://i.imgur.com/wYDvY67.jpg")

                message.channel.send(embed)

            })
        }
        if (zodiacs >= 420 && zodiacs <= 520) {
            const zodiac = "Taurus"
            console.log(zodiac)

            const zodiacProfile = await profileModel.findOne(
                {
                    guildId,
                    userId
                })

            if (zodiacProfile) {

                await profileModel.findOneAndUpdate(
                    {
                        guildId,
                        userId,
                        zodiac
                    })
            } else {
                await new profileModel({
                    guildId,
                    userId,
                    zodiac
                }).save()
            }
            let url = client.users.fetch(userId);
            url.then(function (targetURL) {
                var imgURL = targetURL.displayAvatarURL();
                let embed = new Discord.MessageEmbed()
                    .setColor("PURPLE")
                    .setAuthor(`${message.author.username}`, `${imgURL}`)
                    .setDescription(`Your star sign has been set to ${zodiac}. You may now request your fortune from Katrina. If this is incorrect, please run the command and try again...`)
                    .setTimestamp()
                    .setThumbnail("https://i.imgur.com/wYDvY67.jpg")

                message.channel.send(embed)

            })
        }
        if (zodiacs >= 521 && zodiacs <= 621) {
            const zodiac = "Gemini"
            console.log(zodiac)

            const zodiacProfile = await profileModel.findOne(
                {
                    guildId,
                    userId
                })

            if (zodiacProfile) {

                await profileModel.findOneAndUpdate(
                    {
                        guildId,
                        userId,
                        zodiac
                    })
            } else {
                await new profileModel({
                    guildId,
                    userId,
                    zodiac
                }).save()
            }
            let url = client.users.fetch(userId);
            url.then(function (targetURL) {
                var imgURL = targetURL.displayAvatarURL();
                let embed = new Discord.MessageEmbed()
                    .setColor("PURPLE")
                    .setAuthor(`${message.author.username}`, `${imgURL}`)
                    .setDescription(`Your star sign has been set to ${zodiac}. You may now request your fortune from Katrina. If this is incorrect, please run the command and try again...`)
                    .setTimestamp()
                    .setThumbnail("https://i.imgur.com/wYDvY67.jpg")

                message.channel.send(embed)

            })
        }
        if (zodiacs >= 622 && zodiacs <= 722) {
            const zodiac = "Cancer"
            console.log(zodiac)

            const zodiacProfile = await profileModel.findOne(
                {
                    guildId,
                    userId
                })

            if (zodiacProfile) {

                await profileModel.findOneAndUpdate(
                    {
                        guildId,
                        userId,
                        zodiac
                    })
            } else {
                await new profileModel({
                    guildId,
                    userId,
                    zodiac
                }).save()
            }
            let url = client.users.fetch(userId);
            url.then(function (targetURL) {
                var imgURL = targetURL.displayAvatarURL();
                let embed = new Discord.MessageEmbed()
                    .setColor("PURPLE")
                    .setAuthor(`${message.author.username}`, `${imgURL}`)
                    .setDescription(`Your star sign has been set to ${zodiac}. You may now request your fortune from Katrina. If this is incorrect, please run the command and try again...`)
                    .setTimestamp()
                    .setThumbnail("https://i.imgur.com/wYDvY67.jpg")

                message.channel.send(embed)

            })
        }
        if (zodiacs >= 723 && zodiacs <= 822) {
            const zodiac = "Leo"
            console.log(zodiac)

            const zodiacProfile = await profileModel.findOne(
                {
                    guildId,
                    userId
                })

            if (zodiacProfile) {

                await profileModel.findOneAndUpdate(
                    {
                        guildId,
                        userId,
                        zodiac
                    })
            } else {
                await new profileModel({
                    guildId,
                    userId,
                    zodiac
                }).save()
            }
            let url = client.users.fetch(userId);
            url.then(function (targetURL) {
                var imgURL = targetURL.displayAvatarURL();
                let embed = new Discord.MessageEmbed()
                    .setColor("PURPLE")
                    .setAuthor(`${message.author.username}`, `${imgURL}`)
                    .setDescription(`Your star sign has been set to ${zodiac}. You may now request your fortune from Katrina. If this is incorrect, please run the command and try again...`)
                    .setTimestamp()
                    .setThumbnail("https://i.imgur.com/wYDvY67.jpg")

                message.channel.send(embed)

            })
        }
        if (zodiacs >= 823 && zodiacs <= 922) {
            const zodiac = "Virgo"
            console.log(zodiac)

            const zodiacProfile = await profileModel.findOne(
                {
                    guildId,
                    userId
                })

            if (zodiacProfile) {

                await profileModel.findOneAndUpdate(
                    {
                        guildId,
                        userId,
                        zodiac
                    })
            } else {
                await new profileModel({
                    guildId,
                    userId,
                    zodiac
                }).save()
            }
            let url = client.users.fetch(userId);
            url.then(function (targetURL) {
                var imgURL = targetURL.displayAvatarURL();
                let embed = new Discord.MessageEmbed()
                    .setColor("PURPLE")
                    .setAuthor(`${message.author.username}`, `${imgURL}`)
                    .setDescription(`Your star sign has been set to ${zodiac}. You may now request your fortune from Katrina. If this is incorrect, please run the command and try again...`)
                    .setTimestamp()
                    .setThumbnail("https://i.imgur.com/wYDvY67.jpg")

                message.channel.send(embed)

            })
        }
        if (zodiacs >= 923 && zodiacs <= 1023) {
            const zodiac = "Libra"
            console.log(zodiac)

            const zodiacProfile = await profileModel.findOne(
                {
                    guildId,
                    userId
                })

            if (zodiacProfile) {

                await profileModel.findOneAndUpdate(
                    {
                        guildId,
                        userId,
                        zodiac
                    })
            } else {
                await new profileModel({
                    guildId,
                    userId,
                    zodiac
                }).save()
            }
            let url = client.users.fetch(userId);
            url.then(function (targetURL) {
                var imgURL = targetURL.displayAvatarURL();
                let embed = new Discord.MessageEmbed()
                    .setColor("PURPLE")
                    .setAuthor(`${message.author.username}`, `${imgURL}`)
                    .setDescription(`Your star sign has been set to ${zodiac}. You may now request your fortune from Katrina. If this is incorrect, please run the command and try again...`)
                    .setTimestamp()
                    .setThumbnail("https://i.imgur.com/wYDvY67.jpg")

                message.channel.send(embed)

            })
        }
        if (zodiacs >= 1024 && zodiacs <= 1121) {
            
            const zodiac = "Scorpio"
            console.log(zodiac)

            const zodiacProfile = await profileModel.findOne(
                {
                    guildId,
                    userId
                })

            if (zodiacProfile) {

                await profileModel.findOneAndUpdate(
                    {
                        guildId,
                        userId,
                        zodiac
                    })
            } else {
                await new profileModel({
                    guildId,
                    userId,
                    zodiac
                }).save()
            }
            let url = client.users.fetch(userId);
            url.then(function (targetURL) {
                var imgURL = targetURL.displayAvatarURL();
                let embed = new Discord.MessageEmbed()
                    .setColor("PURPLE")
                    .setAuthor(`${message.author.username}`, `${imgURL}`)
                    .setDescription(`Your star sign has been set to ${zodiac}. You may now request your fortune from Katrina. If this is incorrect, please run the command and try again...`)
                    .setTimestamp()
                    .setThumbnail("https://i.imgur.com/wYDvY67.jpg")

                message.channel.send(embed)

            })
        }
        if (zodiacs >= 1122 && zodiacs <= 1221) {
            const zodiac = "Sagittarius"
            console.log(zodiac)

            const zodiacProfile = await profileModel.findOne(
                {
                    guildId,
                    userId
                })

            if (zodiacProfile) {

                await profileModel.findOneAndUpdate(
                    {
                        guildId,
                        userId,
                        zodiac
                    })
            } else {
                await new profileModel({
                    guildId,
                    userId,
                    zodiac
                }).save()
            }
            let url = client.users.fetch(userId);
            url.then(function (targetURL) {
                var imgURL = targetURL.displayAvatarURL();
                let embed = new Discord.MessageEmbed()
                    .setColor("PURPLE")
                    .setAuthor(`${message.author.username}`, `${imgURL}`)
                    .setDescription(`Your star sign has been set to ${zodiac}. You may now request your fortune from Katrina. If this is incorrect, please run the command and try again...`)
                    .setTimestamp()
                    .setThumbnail("https://i.imgur.com/wYDvY67.jpg")

                message.channel.send(embed)

            })
        } 
    }
}