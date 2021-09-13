import React from "react";
import { View, Text,FlatList, StyleSheet, Button } from "react-native";
import { useSelector } from "react-redux";
import Color from "../../constants/Color";

const CartScreen = props => {
    const cartTotalAmount = useSelector(state => state.cart.totalAmount);
    const CartItem = useSelector(state => {
        const transformedCartitems = [];
        for(const key in state.cart.items){
            transformedCartitems.push({
                productId: key,
                productTitle: state.cart.items[key].productTitle,
                productPrice: state.cart.items[key].productPrice,
                quantity: state.cart.items[key].quantity,
                sum: state.cart.items[key].sum
            })
        }
        return transformedCartitems;
    });

    return <View style={styles.screen}>
        <View style={styles.summary}>
            <Text style={styles.summaryText}>Total: <Text style={styles.amount}>${cartTotalAmount.toFixed(2)}</Text> </Text>
            <Button color={Color.accent} title="Order Now" disabled={CartItem.length === 0}/>
        </View>
        <View>
            <Text>
                CART ITEMS
            </Text>
        </View>
    </View>
};

const styles = StyleSheet.create({
    screen: {
        margin: 20,
    },
    summary: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
        padding: 10,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 15,
    },
    summaryText: {
        fontFamily: "open-sans-bold",
        fontSize: 18,
        padding: 10
    },
    amount: {
        color: Color.accent
    }
    });

export default CartScreen;