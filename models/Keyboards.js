const { Schema, model } = require('mongoose')

const keyboardSchema = new Schema({

    image: String,
    name: { type: String },
    description: String,
    price: Number,
    rating: String

})

const Keyboard = model('Keyboard', keyboardSchema)

module.exports = Keyboard