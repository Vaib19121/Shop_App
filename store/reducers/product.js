import PRODUCTS from '../../data/dummydata';
const initialstate ={
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter(prod => prod.ownerId === 'u1')
};

export default (state = initialstate, action ) => {
    return state;
};