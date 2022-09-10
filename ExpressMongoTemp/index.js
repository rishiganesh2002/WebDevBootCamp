const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/farmStand')
.then(() => {
    console.log("MONGO CONNECTION SUCCESSFUL");
})
.catch(err => {
    console.log("Oh no error");
    console.log(err);
})

const Product = require('./models/product');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'));

const categories = ['fruit', 'vegetable', 'dairy'];

app.get('/products', async (req, res) => {
    const { category } = req.query

    if(category){
        const products = await Product.find({ category })
        res.render('products/index', {products, category});
    } else {
        const products = await Product.find({})
        res.render('products/index', {products, category: 'All'});
    }
})

app.get('/products/new', (req, res) => {
    res.render('products/new', {categories});
})

app.post('/products', async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    console.log(newProduct);
    res.redirect(`/products/${newProduct._id}`);
})

app.get('/products/:id', async(req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    // console.log(product);
    res.render('products/show', {product});
})

app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/edit', {product, categories});
})

app.put('/products/:id', async (req, res) => {
    const { id }= req.params;

    const product = await Product.findByIdAndUpdate(id, req.body, {runValidators: true, new:true});
    console.log(req.body);
    res.redirect(`/products/${product._id}`);
})

app.delete('/products/:id', async(req, res) => {
    const { id } = req.params;
    const deleted_product = await Product.findByIdAndDelete(id);
    res.redirect('/products');
})


app.listen(3000, ()=>{
    console.log("app is running on port 3000");
})

