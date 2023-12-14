const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    picture:String,
    password:String,
    Id:String
})

module.exports = mongoose.model("User",userSchema);