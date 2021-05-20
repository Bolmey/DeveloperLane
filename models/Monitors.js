const { Schema, model } = require('mongoose');

const monitorSchema = new Schema({
  image: String,
  name: { type: String },
  description: String,
  price: Number,
  rating: String,
  best: Boolean
});

const Monitor = model('Monitor', monitorSchema);

module.exports = Monitor;
