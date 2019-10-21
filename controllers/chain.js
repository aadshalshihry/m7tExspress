/**
 * Author: Abdulrahman Alshehri
 *  handle all request for compnay model.
 * Todo:
 *    1. I18n all messages
 *
 */
const _ = require('lodash');
const validator = require('validator');
const Company = require('../models/Chain');

/**
 * GET /company/index
 * Company Home page.
 */
// exports.companyIndex = (req, res) => {
//   Company.find({}, (err, companies) => {
//     res.render('company/index', {
//       title: 'Company Index',
//       companies
//     });
//   });
// };

/**
 * Get /company/create
 * Company Create page
 */
// exports.createPage = (req, res) => {
//   res.render('chain/create', {
//     title: 'Company Create Page'
//   });
// };

/**
 * Post /company/store
 * Company Store
 * Todo:
 *  1. puplate chains or none
 *  2. handle upload logo
 *  3. check user role ( p(PM), a(admin)) before create
 *  4. Redirect to show
 */
// exports.store = (req, res, next) => {
//   const validationErrors = [];
//   if (validator.isEmpty(req.body.name)) validationErrors.push({ msg: 'Company name can\'t be empty' });
//   if (!validator.isEmail(req.body.email)) validationErrors.push({ msg: 'Please enter a valid email address.' });
//
//   if (validationErrors.length) {
//     req.flash('errors', validationErrors);
//     return res.redirect('back');
//   }
//
//   req.body.email = validator.normalizeEmail(req.body.email, { gmail_remove_dots: false });
//
//   const location = {
//     address: req.body.address
//   };
//
//   console.log(req.file);
//   const company = new Company({
//     name: req.body.name,
//     email: req.body.email,
//     // logo: req.body.logo,
//     location
//   });
//
//   Company.findOne({ name: req.body.name }, (err, existingCompany) => {
//     if (err) return next(err);
//     if (existingCompany) {
//       req.flash('errors', { msg: 'Company is already exists.' });
//       return res.redirect('back');
//     }
//     company.save((err) => {
//       if (err) return next(err);
//       res.redirect('index');
//     });
//   });
// };

/**
 * Get /company/edit
 * Company Edit page
 */
// exports.companyEditPage = (req, res) => {
//   res.render('company/edit', {
//     title: 'Company Edit Page'
//   });
// };

/**
 * Post /company/update
 * Company Store
 */
// exports.companyUpdate = (req, res, next) => {
//   const validationErrors = [];
//   if (validator.isEmpty(req.body.name)) validationErrors.push({ msg: 'Company name can\'t be empty' });
//   if (!validator.isEmail(req.body.email)) validationErrors.push({ msg: 'Please enter a valid email address.' });
//
//   if (validationErrors.length) {
//     req.flash('errors', validationErrors);
//     return res.redirect('back');
//   }
//
//   req.body.email = validator.normalizeEmail(req.body.email, { gmail_remove_dots: false });
//
//   const location = {
//     address: req.body.address
//   };
//
//   console.log(req.file);
//   const company = new Company({
//     name: req.body.name,
//     email: req.body.email,
//     // logo: req.body.logo,
//     location
//   });
//
//   Company.findOne({ name: req.body.name }, (err, existingCompany) => {
//     if (err) return next(err);
//     if (existingCompany) {
//       req.flash('errors', { msg: 'Company is already exists.' });
//       return res.redirect('back');
//     }
//     company.save((err) => {
//       if (err) return next(err);
//       res.redirect('index');
//     });
//   });
// };


/**
 * Post /company/delete
 * Company Store
 */
exports.companyDelete = (req, res) => {

};
