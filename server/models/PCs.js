const { Schema, model } = require('mongoose')

const pcsSchema = new Schema({

    image: String,
    name: { type: String },
    description: String,
    price: Number,
    rating: String

})

const PCs = model('PCs', pcsSchema)

module.exports = PCs