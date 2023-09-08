const mongoose = require('mongoose')



const logSchema = new mongoose.Schema({
    title:{type: String},
    entry: {type: String},
    shipIsBroken: {type: Boolean}
},{timestamps: true})


module.exports = mongoose.model('Log', logSchema)