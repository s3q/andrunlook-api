const mongoose = require("mongoose")

const AndrProgressSchema = new mongoose.Schema({
    aid: {
        type: String,
        required: true, 
    },
    name: {
        type: String,
        required: true,
    },
    device : {
        type: String,
        default: "", 
    },
    // pinProgress: {
    //     type: Number,
    //     default: 0
    // },
    pinPublicProgress: {
        type: Number,
        default: 0
    },
    pinRange: {
        type: Array,
        default: [],
    },
    embeddedNumbers: {
        type: Array,
        default: [],
    },
    pinLength: {
        type: Number,
        default: 0
    }
}, { timestamps: true })

module.exports =  mongoose.model("AndrProgress", AndrProgressSchema)