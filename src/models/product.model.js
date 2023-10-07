
export default class ProductModel{
    constructor(id,name,desc,price,imageUrl){
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.price = price;
        this.imageUrl = imageUrl;
    }

    static get(){
        return products;
    }

    static add(product){
        products.push(
            new ProductModel(products.length+1,
                product.name,
                product.desc,
                product.price,
                product.imageUrl)
        )
    }

    static getById(id) {
        return products.find((p) => p.id == id);
    }

    static update(product){
        const index = products.findIndex((p) => p.id == product.id);
        products[index] = product;
    }

    static delete(id){
        const index = products.findIndex((p) => p.id == id);
        products.splice(index,1);
    }

    
}

var products = [
    new ProductModel(1,"Atomic Habits","A supremely practical and useful book.",150,"https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg"),
    new ProductModel(2,"Ikigai","Japanese Secret to live a long and happy life",180,"https://m.media-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg"),
    new ProductModel(3,"Deep Work","Rules for focused success in a distracted world",250,"https://m.media-amazon.com/images/I/31PBdo581fL._SX317_BO1,204,203,200_.jpg"),
]