import React from 'react';
import { ScrollView, View, Button, Text, Image, StyleSheet } from 'react-native';
import Color from '../../constants/Color';
import { useSelector,useDispatch } from 'react-redux';
import * as cartActions from '../../store/actions/cart';

const ProductsDetailScreen = props => {
    const productId = props.navigation.getParam('productId');
    const selectedProduct = useSelector(state => state.products.availableProducts.find(prod => prod.id === productId));
    const dispatch = useDispatch();
    return <ScrollView>
        <Image style={styles.image} source={{uri: selectedProduct.imageurl}} />
        <View style={styles.actions}>
            <Button color={Color.primary} title="Add To Cart " onPress={() => {
                dispatch(cartActions.addtocart(selectedProduct));
            }} />
        </View>
        <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
        <Text style={styles.description}>{selectedProduct.description}</Text>
    </ScrollView>
};

ProductsDetailScreen.navigationOptions = navData => {
    return {
        headerTitle: navData.navigation.getParam('productTitle')
    };
};

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 300
    },
    price: {
        fontSize: 18,
        color: "#888",
        textAlign:"center",
        marginVertical: 20
    },
    description: {
        fontSize: 14,
        textAlign: "center",
        marginHorizontal: 20
    },
    actions: {
        marginVertical: 10,
        alignItems: "center"
    }
});

export default ProductsDetailScreen;