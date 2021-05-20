const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  products: {
    type: Array
  }
});



// name
// :"LG 34GN850-B"
// image
// :"https://icdn.digitaltrends.com/image/digitaltrends/dsc02043.jpg"
// description
// :"With IPS 1ms comparable to TN speed, providing the minimized afterimag..."
// price
// :999.99
// rating
// :"4.8"
// best
// :true



module.exports = User = mongoose.model('user', UserSchema);
