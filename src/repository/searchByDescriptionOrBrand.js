import mongoose, { connect } from './mongo.client';
import products from './products';
import ProductSchema from './schemas/product';

const searchByDescriptionOrBrand = async (search)=>{
    let products = [];
    try {
        await connect();
        const Product = mongoose.model('Product', ProductSchema, 'products');
        const pattern = `.*${search}.*`;
        console.log(pattern);
        products = await Product.find({
            $or:[
                {brand:{$regex: pattern, $options:'i'}},
                {description:{$regex: pattern, $options:'i'}},
            ]
        }).lean();
    } catch (e) {
        console.error("[searchByDescriptionOrBrand] Error obteniendo productos ", e);
    } finally {
        await mongoose.disconnect();
    }   
    return products;
};

export default searchByDescriptionOrBrand;
