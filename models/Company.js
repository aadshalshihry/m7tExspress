const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const companySchema = new mongoose.Schema({
  name: { type: String, unique: true },
  email: { type: String, unique: true },
  logo: { type: String },
  chains: [{ type: Schema.Types.ObjectId, ref: 'Chain' }],
  address: { type: Schema.Types.ObjectId, ref: 'Address' },
  reviewer: { type: Schema.Types.ObjectId, ref: 'User' },
  createdBy: { type: Schema.Types.ObjectId, ref: 'User' },

}, { timestamps: true });


const Company = mongoose.model('Company', companySchema);

module.exports = Company;
