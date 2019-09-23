import express  from 'express';


import adminController  from '../controllers/admin.controller';
const router = express.Router();



// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);
router.get('/products', adminController.getProducts);

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

router.get('/edit-product/:id', adminController.getEditProduct);
router.post('/edit-product', adminController.postEditProduct);
router.post('/delete-product', adminController.postDeleteProduct);


export = { router} ;

