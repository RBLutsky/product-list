const mongoose = require('mongoose')
const Schema = mongoose.Schema


const ProductSchema = new Schema({
    category: String,
    name: String,
    price: Number,
    image: String,
    reviews: [{type: String, ref: 'review'}]
})
//pagination code in routes - main.js
module.exports = mongoose.model('Product', ProductSchema)
