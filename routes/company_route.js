const companyController = require('../controllers/company');
const passportConfig = require('../config/passport');

module.exports = function (app, upload) {
  app.get('/company/index', passportConfig.isAuthenticated, companyController.companyIndex);
  app.get('/company/create', passportConfig.isAuthenticated, companyController.companyCreatePage);
  app.get('/company/show/:slug', passportConfig.isAuthenticated, companyController.companyShowPage);

  app.post('/company/store',
    passportConfig.isAuthenticated,
    upload.single('logo'),
    companyController.companyStore);
};
