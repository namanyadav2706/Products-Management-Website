import path from 'path';
import ProductModel from '../models/product.model.js';
class ProductController{

    getProducts(req,res){
        let products = ProductModel.get();
        res.render("products",{products:products})
        // console.log(path.resolve());
        // return res.sendFile(path.join(path.resolve(),"src",'views',"products.ejs" ));
    }

    getAddNew(req,res){
        res.render("new-product",{errorMsg:null});
    }

    addNewProduct(req,res){
        ProductModel.add(req.body)
        let products = ProductModel.get();
        res.render('products',{products});
    }

    getProductUpdate(req,res){
        const id = req.params.id;
        const productFound = ProductModel.getById(id);
        console.log(productFound);
        if(productFound){
            res.render('update-product',{product:productFound,errorMsg:null});
        }else{
            res.status(401).send("Product not found");
        }
    }

    postUpdateProduct(req,res){
        ProductModel.update(req.body)
        let products = ProductModel.get();
        res.render('products',{products});
    }

    deleteProduct(req,res){
        const id = req.params.id;
        const productFound = ProductModel.getById(id);
        console.log(productFound);
        if(!productFound){
            return res.status(401).send("Product not found");
        }
        ProductModel.delete(id);
        let products = ProductModel.get();
        res.render('products',{products});
    }
}

export default ProductController;