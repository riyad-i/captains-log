const express = require('express')
const app = express()
const PORT = 3001

require('dotenv').config()

const connectDB = require('./utils/connectDB')
connectDB()

const jsxEngine = require('jsx-view-engine')
const { mongo, default: mongoose } = require('mongoose')
app.set('view engine', 'jsx');
app.engine('jsx', jsxEngine());

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.get('/', async (req, res) => {
    // const logs = 
    res.render('Index', {logs})
})







app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})