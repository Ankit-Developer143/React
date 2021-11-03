const mongoose = require("mongoose");

const userSchema  = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    }, 
    updated: { type: Date, default: Date.now },
})
module.exports = mongoose.model("user",userSchema)