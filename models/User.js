const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  referralId: { type: String },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  mobile: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  side: { type: String, enum: ['left', 'right'], required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
