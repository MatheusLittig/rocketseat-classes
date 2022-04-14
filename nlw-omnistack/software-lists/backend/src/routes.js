const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const SoftwareController = require('./controllers/SoftwareContoller');
const DashboardController = require('./controllers/DashboardController');
const PurchaseController = require('./controllers/PurchaseController');

const routes = express.Router();
const upload = multer(uploadConfig);

//req.query = para o GET e filtros
//req.params = PUT e DELETE
//req.body = POST e acessar o corpo da requisição

routes.post('/sessions', SessionController.store);

routes.post('/softwares', upload.single('thumbnail'), SoftwareController.store)
routes.get('/softwares',  SoftwareController.index)

routes.get('/dashboard',  DashboardController.show)

routes.post('/softwares/:software_id/purchases', PurchaseController.store)

module.exports = routes;