import express from 'express';

import multer from 'multer';
import multerConfig from './config/multer';

import PointsController from './controllers/PointsControllers';
import ItemsController from './controllers/ItemsController';

// Padrão: index, show, create, update, delete

const routes = express.Router();
const  upload = multer(multerConfig);

const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

routes.post('/points', upload.single('image'), pointsController.create);

export default routes;

// Service Pattern
// Repository Pattern (Data Mapper)