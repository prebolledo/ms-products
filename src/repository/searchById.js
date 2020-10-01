import client from './mongo.client';

const searchById = async (id)=>{
    try {
        await client.connect();
        const Products = client.db().collection('products');
        const product = await Products.findOne({id: id});
        return product;
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }    
};

export default searchById;
