const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  date: {
    required: true,
    type: String,
  },
  minutes: {
    required: true,
    type: Number,
  },
  notes: {
    type: String,
  },
});

const Session = mongoose.model('Session', sessionSchema);
module.exports = Session;
