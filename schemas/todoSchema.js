const mongoose = require("mongoose")
const { type } = require("os")

const todoSchema = mongoose.Schema({
    title:{
        type:String,
        required: true,
    },
    description:String,
    status:{
        type:String,
        enum:['active','inactive']
    },
    date:{
        type: Date,
        default:Date.now,
    }
    

})

module.exports = todoSchema