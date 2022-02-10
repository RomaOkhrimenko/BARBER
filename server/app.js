const express = require('express')
const bodyParser = require('body-parser')
const errorMiddleware = require('./middleware/errorMiddleware')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const path = require('path')

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}))

//Import Routes
const product = require('./routes/productRoute')
const user = require('./routes/userRoute')

app.use('/barber/', product)
app.use('/barber/', user)

app.use(express.static(path.join(__dirname, "../client/build")))

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/build/index.html"))
})

app.use(errorMiddleware)

module.exports = app