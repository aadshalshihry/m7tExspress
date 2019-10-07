const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chainSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  email: { type: String, unique: true },
  address: { type: Schema.Types.ObjectId, ref: 'Address' },
  createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });


const Chain = mongoose.model('Chain', chainSchema);

module.exports = Chain;
