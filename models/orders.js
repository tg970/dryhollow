const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  contact: {
    address1: { type: String, required: true},
    address2: { type: String},
    city: { type: String, required: true},
    email: { type: String, required: true},
    first: { type: String, required: true},
    last: { type: String, required: true},
    state: { type: String, required: true},
    zip: { type: Number, required: true}
  },
  cache: { type: String, required: true},
  cc: {
    number: { type: Number, required: true},
    zip: { type: Number, required: true},
    mo: { type: Number, required: true},
    yr: { type: Number, required: true},
    cvv: { type: Number, required: true}
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Order', orderSchema);
