const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema({
    guildId: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true,
        unique: true,
    },
    zodiac: {
        type: String,
        required: true,
        unique: false,
    },
})

module.exports = mongoose.model('profileModel', profileSchema)