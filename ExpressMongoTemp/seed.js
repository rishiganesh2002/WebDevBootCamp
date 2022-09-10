const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand')
.then(() => {
    console.log("MONGO CONNECTION SUCCESSFUL");
})
.catch(err => {
    console.log("Oh no error");
    console.log(err);
})

// const p = new Product({
//     name: 'Grapefruit', 
//     price: 1.99, 
//     category: 'fruit'
// })

// p.save().then(p => {
//     console.log(p);
// })
// .catch(e =>{
//     console.log(e);
// })

const seedProducts = [{
    name: 'Grapefruit', 
    price: 1.99, 
    category: 'fruit'
}, 

{
    name: 'Orange', 
    price: 4.99, 
    category: 'fruit'
}, 
{
    name: 'Eggplant', 
    price: 1.00, 
    category: 'vegetable'
}, 
{
    name: 'Chocolate Whole Milk', 
    price: 2.69, 
    category: 'dairy'
}, 
{
    name: 'Bittergourd', 
    price: 8.99, 
    category: 'vegetable'
}]

Product.insertMany(seedProducts)
.then(res => {
    console.log(res);
})
.catch(e => {
    console.log(e);
})