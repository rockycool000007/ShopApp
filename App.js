import React from 'react';

import Home from './src/Pages/Home/Home'
import Product from './src/Pages/Product/Product'
import Account from './src/Pages/Account/Account'
import Settings from './src/Pages/Settings/Settings'
import Cart from './src/Pages/Cart/Cart'

import { createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Font } from "./src/Utils/Font";

export default createBottomTabNavigator({
  Home: Home,
  Cart: Cart,
  Account: Account,
  Settings: Settings,
}, {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        } else if (routeName === 'Settings') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        } else if (routeName === 'Account') {
          iconName = `ios-person${focused ? '' : '-outline'}`;
        } else if (routeName === 'Cart') {
          iconName = `ios-cart${focused ? '' : '-outline'}`;
        }

        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  });

Expo.Font.loadAsync({
  'Roboto': require('native-base/Fonts/Roboto.ttf'),
  'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
});