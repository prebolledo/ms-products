import mongoose, { connect } from './mongo.client';
import ProductSchema from './schemas/product';

const searchById = async (id)=>{
    try {
        await connect();        
        const Product = mongoose.model('Product', ProductSchema, 'products');
        const product = await Product.findOne({id: id});
        if(product !== null){        
            return product.toObject();
        }
        return product;
    } catch (e) {
        console.error("[searchById] Error obteniendo producto ", e);
    } finally {
        await mongoose.disconnect();
    }    
};

export default searchById;
