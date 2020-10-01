import mongoose, { connect } from './mongo.client';
import products from './products';
import ProductSchema from './schemas/product';

const searchByDescriptionOrBrand = async (search)=>{
    let products = [];
    try {
        await connect();
        const Product = mongoose.model('Product', ProductSchema, 'products');
        products = await Product.find({
            $or:[
                {brand:{$regex: `.*${search}.*`, '$options':'i'}},
                {description:{$regex: `.*${search}.*`, '$options':'i'}},
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
