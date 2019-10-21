/**
 * Author: Abdulrahman Alshehri
 * Company schema
 * @type {Mongoose}
 *
 * Todo:
 *    1. Add Slug to company model
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseSlugPlugin = require('mongoose-slug-plugin');
const User = require('../models/User');
const Chain = require('../models/Chain');

const companySchema = new mongoose.Schema({
  name: { type: String, unique: true },
  email: { type: String, unique: true },
  logo: { type: String },

  overall_rate: { type: Number, default: 0},
  best_chain: { type: Schema.Types.ObjectId, ref: 'Chain' },
  stars: { type: Number, default: 0},

  location: {
    address: String,
    lat: String,
    lan: String
  },

  chains: [{ type: Schema.Types.ObjectId, ref: 'Chain' }],
  reviewer: { type: Schema.Types.ObjectId, ref: 'User' },
  createdBy: { type: Schema.Types.ObjectId, ref: 'User' },

}, { timestamps: true });

companySchema.plugin(mongooseSlugPlugin, { tmpl: '<%=name%>' });

module.exports = mongoose.model('Company', companySchema);
