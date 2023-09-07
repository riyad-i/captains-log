const express = require('express')
const app = express()
const PORT = 3001

require('dotenv').config()

const connectDB = require('./utils/connectDB')
connectDB()

app.get('/', (req, res) => {
    res.send('Working')
})







app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})