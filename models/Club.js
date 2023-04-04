const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let ClubSchema = new Schema({
    name : {
        type: String,
        required : true
    },
    projecttitle : {
        type: String,
        required : true
    },
    teammembers : {
        type: Number,
        required : true
    },
    section : {
        type: String,
        required : true
    },
});

module.exports = mongoose.model('club', ClubSchema);