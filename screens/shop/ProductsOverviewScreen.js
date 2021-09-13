import React from "react";
import { FlatList, Platform } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../../components/UI/HeaderButton";
import ProductItem from "../../components/Shop/ProductItem";
import * as cartActions from "../../store/actions/cart";

const ProductOverviewScreen = props => {
        const products = useSelector(state => state.products.availableProducts);
        const dispatch = useDispatch();
        return <FlatList
                data={products}
                keyExtractor={item => item.id}
                renderItem={itemdata => <ProductItem image={itemdata.item.imageurl} title={itemdata.item.title} price={itemdata.item.price} onViewDetail={() => {
                        props.navigation.navigate("ProductDetail", {
                                productId: itemdata.item.id,
                                productTitle: itemdata.item.title
                        });
                }} onAddToCart={() => {
                        dispatch(cartActions.addtocart(itemdata.item))
                 }} />}
        />;
};

ProductOverviewScreen.navigationOptions = navData => {
        return{        
                headerTitle: 'All Products',
                headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
                        <Item 
                        title='Cart'  
                        iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'} 
                        onPress={() => {navData.navigation.navigate('Cart')}}/>
                </HeaderButtons>
        }
};

export default ProductOverviewScreen;