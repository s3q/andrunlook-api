const mongoose = require("mongoose")

const AndrPublicProgressSchema = new mongoose.Schema({
    aid: {
        type: String,
        required: true, 
        unique: true,
    },
    index: {
        type: Number,
        required: true, 
        unique: true,
    },
    pin: {
        type: Number,
        required: true, 
        unique: true,
    }
}, { timestamps: true })

module.exports =  mongoose.model("AndrPublicProgress", AndrPublicProgressSchema)