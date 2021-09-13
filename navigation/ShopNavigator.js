import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";

import { Platform } from 'react-native';

import ProductsDetailScreen from '../screens/shop/ProductDetailScreen';
import ProductOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import Color from '../constants/Color';

const ProductsNavigator = createStackNavigator({
    ProductOverview: ProductOverviewScreen,
    ProductDetail: ProductsDetailScreen
}, {
    defaultNavigationOptions: {
        headerStyle:{
            backgroundColor: Platform.OS === 'android' ? Color.primary : ''
        },
        headerTitleStyle: {
            fontFamily: "open-sans-bold"
        },
        headerBackTitleStyle: {
            fontFamily: "open-sans"
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Color.primary
    }
});

export default createAppContainer(ProductsNavigator);