const Product = function(id, name, type, cost){
    this.id = id;
    this.name = name;
    this.type = type;
    this.cost = cost;
};

const Client = function(id, fname, lname){
    this.id = id;
    this.fname = fname;
    this.lname = lname;
};

//История покупок
const Purchase = function(purchaseTime, name, type, amount, sum ){
    this.purchaseTime = purchaseTime;
    this.name = name;
    this.type = type;
    this.amount = amount;
    this.sum = sum;
};

// ----- магазин ------------------------------
const Shop = function(){
    this.listClients = [];
    this.listProducts = [];
    this.listPurchases = [];

    this.addClients = (client) => {
        this.listClients.push(client);
    }

    this.delClients = (client) => {        
        this.listClients.forEach(function(item, i, listClients) {
            if ( item.id == client.id ) {
            //    console.log('i =' + i);
               listClients.splice(i,1);
            } 
        });
    };

    this.addProducts = (product) => {
        this.listProducts.push(product);
    };

    this.delProducts = (product) => {        
        this.listProducts.forEach(function(item, i, listProducts) {
            if ( item.id == product.id ) {
            //    console.log('i =' + i);
               listProducts.splice(i,1);
            } 
        });
    };
    
    this.addPurchases = (purchase) => {
        this.listPurchases.push(purchase);
    };

    // Purchase = function(purchaseTime, name, type, amount, sum )
    // Продажа товара клиенту
    this.sellProduct = (product, date, amount) => {
        let sum = product.cost * amount;
        let purchase = new Purchase(date, product.name, product.type, amount, sum);
        this.addPurchases(purchase);
    };
};
// ------------------------------

let client01 = new Client(1, 'Mary', 'Smit');
let client02 = new Client(2, 'Bob', 'Adams');

let product01 = new Product(1, 'apple', 'fruit', 20),
    product02 = new Product(2, 'carrot', 'vegetables', 5),
    product03 = new Product(3, 'porridge', 'cereals', 25);

let shop = new Shop();

// Добавление клиентов
shop.addClients(client01);
shop.addClients(client02);

// Добавление товара
shop.addProducts(product01);
shop.addProducts(product02);
shop.addProducts(product03);

// console.log(' - Products -');
// console.log(shop.listProducts);

// console.log(' - Clients -');
// console.log(shop.listClients);

// Удаление киента
// shop.delClients(client01);

// Удаление продукта
shop.delProducts(product02);

// Продажа товара клиенту
shop.sellProduct(product01, 07/02/2020, 10);
console.log(shop);
