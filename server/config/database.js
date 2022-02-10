const mongoose = require('mongoose')

const connectDatabase = async() => {
    await mongoose.connect("mongodb+srv://roma:7531@cluster0.ipi5v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true})
        .then(data => {
            console.log("mongodb connection")
        })
}

module.exports = connectDatabase