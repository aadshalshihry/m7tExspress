const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chainSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  email: { type: String, unique: true },

  overall_rate: { type: Number, default: 0 },
  stars: { type: Number, default: 0 },

  location: {
    address: String,
    lat: String,
    lan: String
  },
  createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });


const Chain = mongoose.model('Chain', chainSchema);

module.exports = Chain;
