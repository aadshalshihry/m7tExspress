const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: { type: String, unique: true },
  address: { type: String},
  chainsArray : [
    {
      type: Schema.Types.ObjectId,
      ref: 'Story'
    }
  ]
}, { timestamps: true });


const Company = mongoose.model('Company', companySchema);

module.exports = Company;
