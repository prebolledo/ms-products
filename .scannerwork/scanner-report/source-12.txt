import { applyDiscount } from './search';

test('apply discount', () => {
    const percentage= 50;

    const products = [
        {
            "_id": "5f753120c9d581e2738d0734",
            "id": 2743,
            "brand": "adsfsda",
            "description": "okñju smrwzi",
            "image": "www.lider.cl/catalogo/images/babyIcon.svg",
            "price": 564356,
        },
        {
            "_id": "5f753120c9d581e2738d073c",
            "id": 2752,
            "brand": "dasfsad",
            "description": "lfhp rkhqafgb",
            "image": "www.lider.cl/catalogo/images/toysIcon.svg",
            "price": 318099,
        }        
    ]; 
    const productsAfterApplyDiscount = applyDiscount(products, percentage);
    expect(productsAfterApplyDiscount[0].percentage_discount).toBe(50);
});
