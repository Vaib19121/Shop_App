import React, { useState } from 'react';
import { StyleSheet, View } from "react-native";
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";


import productReducer from './store/reducers/product';
import cartReducer from "./store/reducers/cart";
import ShopNavigator from './navigation/ShopNavigator';

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer
});

const store = createStore(rootReducer);

const fetchfonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {
  const [fontloaded, setfontloaded] = useState(false);

  if (!fontloaded) {
    return <AppLoading startAsync={fetchfonts} onFinish={() => { setfontloaded(true); }} onError={() => {console.log("hii");}} />
  }
  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
