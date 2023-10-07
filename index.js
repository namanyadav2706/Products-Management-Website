import express from 'express';
import ProductController from './src/controllers/product.controller.js';
import validationMiddleware from './src/Middlewares/validation.middleware.js';
import path from 'path';
import Layout from 'express-ejs-layouts';
const app = express();
const Port = 8000;

app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set("views",path.join(path.resolve(),"src",'views'))

app.use(Layout);

const productController = new ProductController();
app.get('/',productController.getProducts);
app.get('/new',productController.getAddNew);
app.get('/update-product/:id',productController.getProductUpdate);
app.post('/',validationMiddleware,productController.addNewProduct);
app.post('/update-product',validationMiddleware,productController.postUpdateProduct);
app.get('/delete-product/:id',productController.deleteProduct);

app.use(express.static('src/views'));

app.listen(Port,()=>{
    console.log(`Server is running on Port: ${Port}`);
})