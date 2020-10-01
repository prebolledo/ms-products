const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    id: Number,
    brand: String,
    description: String,
    image: String,
    price: Number,
});

export default ProductSchema;