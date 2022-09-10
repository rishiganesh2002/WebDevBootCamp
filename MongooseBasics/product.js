const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp')
.then(() => {
    console.log("CONNECTION SUCCESSFUL");
})
.catch(err => {
    console.log("Oh no error");
    console.log(err);
})

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        min: [0, 'price must be positive']
    },

});

productSchema.methods.greet = function() {
    console.log("Hello");
}

productSchema.statics.fireSale = function () {
    return this.updateMany({}, {onSale: true, price: 0})
}

const Product = mongoose.model('Product', productSchema);

const bike = new Product({name: ' Mountain Bike', price: 599});
bike.save()
.then(data => {
    console.log("It worked");
    console.log(data)
})
.catch(err => {
    console.log("It failed");
    console.log(err)
})

Product.fireSale().then(res => console.log(res));