const mongoose = require('mongoose')

const notesSchema = new mongoose.Schema({
    title:String,
    content:String,
    user: String,
    index:String
})

module.exports = mongoose.model("Note",notesSchema);