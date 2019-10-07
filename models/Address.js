const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const addressSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  email: { type: String, unique: true },
  address: { type: Schema.Types.ObjectId, ref: 'Address' }
}, { timestamps: true });


const Address = mongoose.model('Address', addressSchema);

module.exports = Address;
