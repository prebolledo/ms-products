import client from './mongo.client';

const searchByDescriptionOrBrand = async (search)=>{
    try {
        await client.connect();
        const Products = client.db().collection('products');
        const products = await Products.find({
            $or:[
                {brand:{$regex: '.*'+search+'.*', '$options':'i'}},
                {description:{$regex: '.*'+search+'.*', '$options':'i'}},
            ]
        });
        return products.toArray();
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }   
};

export default searchByDescriptionOrBrand;
