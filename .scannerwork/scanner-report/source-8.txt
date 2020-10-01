import ProductsRepository from '../repository/products';
import {isPalindromo, minCharactersSearch, isId} from '../helpers/utils';

const getProducts = async (search) => {
    let products = [];
    let product = null;    
    if(search !== undefined){
        if(isId(search)){
            product = await ProductsRepository.searchById(parseInt(search));         
            if( product !== null ){
                products.push(product); 
            }
        }else if(minCharactersSearch(search)){
            products = await ProductsRepository.searchByDescriptionOrBrand(search);
        }
    }

    return products;
};

export const applyDiscount = (products, percent) => {
    products = products.map(product => {
        product.percentage_discount = percent;
        product.previous_price = product.price;
        if(percent > 0){
            product.price = product.price * (percent/100);
        }
        return product;
    });
    return products;
};


export default async (req, res, next) => {
    try{
        
        let products = await getProducts(req.query.search);
        applyDiscount(products, isPalindromo(req.query.search) ? 50 : 0);

        res.status(200).json({
            OK: true,
            data: products,
            error: null
        });

    }catch(error){
        console.log(error);
        res.status(500).json({
            OK: false,
            data: null,
            error: "Error al intentar recuperar lista de productos"
        });
    }
};