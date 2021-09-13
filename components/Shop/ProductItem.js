import React from 'react';
import { Text, View, Image, StyleSheet, Button, TouchableNativeFeedback } from 'react-native';
import Color from '../../constants/Color';

const ProductItem = props => {
    return <TouchableNativeFeedback onPress={props.onViewDetail} useForeground>
        <View style={styles.product}>
            <Image style={styles.image} source={{ uri: props.image }} />
            <View style={styles.details}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.price}>${props.price.toFixed(2)}</Text>
            </View>

            <View style={styles.actions}>
                <Button color={Color.primary} title="View Details" onPress={props.onViewDetail} />
                <Button color={Color.primary} title="To Cart" onPress={props.onAddToCart} />
            </View>
        </View>
    </TouchableNativeFeedback>
};

const styles = StyleSheet.create({
    product: {
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 15,
        backgroundColor: 'white',
        height: 300,
        margin: 20,
        overflow: "hidden"
    },
    image: {
        width: '100%',
        height: '60%'
    },
    title: {
        fontSize: 18,
        marginVertical: 4,
        fontFamily: "open-sans-bold"
    },
    price: {
        fontSize: 14,
        color: "#888",
        fontFamily: "open-sans"
    },
    actions: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        paddingHorizontal: 20,
    },
    details: {
        alignItems: "center",
        height: '15%',
        padding: 10,
        fontFamily: "open-sans"
    },
    imagecontainer: {
        height: "60%",
        width: "100%",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: "hidden"
    }
});

export default ProductItem;