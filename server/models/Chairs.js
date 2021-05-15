const { Schema, model } = require('mongoose')

const chairsSchema = new Schema({

    image: String,
    name: { type: String },
    description: String,
    price: Number,
    rating: String

})

const Chairs = model('Chairs', chairsSchema)

module.exports = Chairs