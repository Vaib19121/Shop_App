import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cart";
import CartItem from "../../models/cart-item";
const initialState = {
    items: {},
    totalAmount: 0,
};

export default (state = initialState, action) => {
    switch (action.type){
        case ADD_TO_CART:
            const addedProduct = action.product;
            const productPrice = addedProduct.price;
            const productTitle = addedProduct.title;

            let updatedorNewCartitem;

            if(state.items[addedProduct.id]){
                updatedorNewCartitem = new CartItem(
                    state.items[addedProduct.id].quantity + 1,
                    productPrice,
                    productTitle,
                    state.items[addedProduct.id].sum + productPrice
                );
                
            }
            else{
                updatedorNewCartitem = new CartItem(1,productPrice , productTitle, productPrice);
               
            } return{
                    ...state,
                    items: { ...state.items, [addedProduct.id]: updatedorNewCartitem},
                    totalAmount: state.totalAmount + productPrice
               }
        case REMOVE_FROM_CART: 
               const selectedCartitem = state.items[action.pid];
               const currentQty = selectedCartitem.quantity;
               let updatedCartItems;
               if(currentQty > 1){
                    const updatedCartItem = new CartItem(
                        selectedCartitem.quantity - 1, 
                        selectedCartitem.productPrice, 
                        selectedCartitem.productTitle, 
                        selectedCartitem.sum - selectedCartitem.productPrice
                    );
                    updatedCartItems = {...state.items, [action.pid]: updatedCartItem}
                }
               else{
                    updatedCartItems = {...state.items};
                   delete updatedCartItems[action.pid];
               }
               return {
                   ...state,
                   items: updatedCartItems,
                   totalAmount: state.totalAmount - selectedCartitem.productPrice
               };
    }
    return state;
};