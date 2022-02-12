const app = require('./app')
const connectDatabase = require('./config/database')

process.on('uncaughtException', (err) => {
    console.log(`Error ${err.message}`)
    console.log(`Shuttin down the server due to Uncaught Exception`)
    process.exit(1)
})

// Connected Database
connectDatabase()

const PORT = process.env.PORT || 4000

if(process.env.NODE_ENV !== "PRODUCTION") {
    require('dotenv').config({path: "server/.env"})
}

const server = app.listen(PORT, () => {
    console.log(`Server is working on http://localhost:${PORT}`)
})

process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err}`)
    console.log(`Shutting down the server due to Unhandled Promise Rejection`)

    server.close(() => {
        process.exit(1)
    })
})