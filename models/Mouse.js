const { Schema, model } = require('mongoose');

const mouseSchema = new Schema({
  image: String,
  name: { type: String },
  description: String,
  price: Number,
  rating: String,
  best: Boolean
});

const Mouse = model('Mouse', mouseSchema);

module.exports = Mouse;
