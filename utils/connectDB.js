const mongoose = require('mongoose')




module.exports = function() {
    mongoose.connect(process.env.MONGO_URI)
    
    const db = mongoose.connection
    db.on('error', (e) => {
        console.log();
    })
    db.on('open', () => console.log('Connected to MongoDB'))
    db.on('close', () => console.log('MongoDB disconnected'))

}    
