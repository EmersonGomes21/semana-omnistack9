const express = require('express');
const SessionController = require('./controllers/SessionController');
const multer = require('multer');
const uploadConfig= require('./config/upload')
const SpotController = require('./controllers/SpotController');
const DashBoardController = require('./controllers/DashBoardController');
const BookingController = require('./controllers/BookingController');

const routes = express.Router();
const upload = multer(uploadConfig);
routes.post('/sessions', SessionController.store); 
routes.post('/spots', upload.single('thumbnail'), SpotController.store); 

routes.get('/spots',  SpotController.index); 

routes.get('/dashboard',  DashBoardController.show); 

routes.post('/spots/:spot_id/bookings',BookingController.store); 
  
  module.exports = routes;
  //Parei em 1:04: 30
  //às 2020/07/19T03:33:00