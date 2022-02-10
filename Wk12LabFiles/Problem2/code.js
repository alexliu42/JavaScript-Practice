class Products{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
}

let prods = [];

function AddItems(){
    let product = new Products("Shampoo", 6.99);
    prods.push(product);

    product = new Products("Deodrant", 3.99);
    prods.push(product);

    product = new Products("Shower gel", 4.99);
    prods.push(product);

    product = new Products("Toothpaste", 2.99);
    prods.push(product);

    product = new Products("Toothbrush", 1.99);
    prods.push(product);
}

AddItems();

prods.forEach(function(item){
    GenerateTable();
    console.log("Name: " + item.name + ", Price: $" + item.price);
}
);

function GenerateTable(){
    var body = document.getElementsByTagName('body')[0];
    var tbl = document.createElement('table');   
    var tbdy = document.createElement('tbody');

}