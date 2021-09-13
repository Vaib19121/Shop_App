import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import {Ionicons} from '@expo/vector-icons';

const CarItem = props => {
    return <View style={styles.CarItem}>
        <View style={styles.ItemData}>
            <Text style={styles.QTY}>{props.quantity} </Text>
            <Text style={styles.Maintext}>{props.title} </Text>
        </View>
        <View style={styles.ItemData}>
            <Text style={styles.Maintext}>${props.amount.toFixed(2)}</Text>
            <TouchableOpacity onPress={props.onRemove} style={styles.deleteButton}>
                <Ionicons name="md-trash" size={23} color="red" />
            </TouchableOpacity>
        </View>
    </View>
};

const styles = StyleSheet.create({
    CarItem: {
        padding: 10,
        backgroundColor: 'white',
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 20
    },
    ItemData: {
        flexDirection: "row",
        alignItems: "center"
    },
    QTY: {
        fontFamily: "open-sans",
        color: "#888",
        fontSize: 16
    },
    Maintext: {
        fontFamily: "open-sans-bold",
        fontSize: 16,
    },
    amt: {
        fontFamily: "open-sans-bold",
        fontSize: 16,
    },
    deleteButton: {
        marginLeft: 20
    }
});

export default CarItem;