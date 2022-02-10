const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter Product Name"],
        trim: true
    },
    description: {
        type: String,
        required: [true, "Please Enter Product Description"]
    },
    price: {
        type: Number,
        required: [true, "Please Enter Product Price"]
    },
    images: [
        {
            url: {
                type: String,
                required: true
            }
        }
    ],
    category: {
        type: String,
        required: [true, "Please Enter Product Category"]
    },
    stock: {
        type: Number,
        required: [true, "Please Enter Product Stick"],
        maxLength: [4, "Stock cannot 4 characters"],
        default: 1
    },
    // reviews: [
    //     {
    //         user: {
    //             type: mongoose.Schema.ObjectId,
    //             ref: "User",
    //             required: true
    //         },
    //         name: {
    //             type: String,
    //             required: true
    //         },
    //         comment: {
    //             type: String,
    //             required: true
    //         }
    //
    //     }
    // ],

    data: {
        type: Date,
        default: Date.now
    },

    // user: {
    //     type: mongoose.Schema.ObjectId,
    //     ref: "User",
    //     required: true
    // }
})

module.exports = mongoose.model("Product", productSchema)