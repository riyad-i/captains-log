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

const Log = require('./models/logs')


app.get('/', async (req, res) => {
    const logs = await Log.find({})
    console.log(logs);
    res.render('Index', {logs})
})

app.post('/', async (req, res) => {
    const log = await Log.create(req.body)
    res.send(log)
})





app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})