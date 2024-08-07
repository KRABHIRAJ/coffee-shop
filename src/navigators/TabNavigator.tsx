/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet} from 'react-native';
import {CartScreen, FavouritesScreen, HomeScreen, OrderHistoryScreen} from '../screens';
import { COLORS } from '../theme/theme';
import React from 'react';
import CustomIcon from '../components/CustomIcon';

const Tab = createBottomTabNavigator();


const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false, tabBarHideOnKeyboard:true, tabBarShowLabel:false, tabBarStyle: styles.tabBarStyle}}>
      <Tab.Screen name="Home" component={HomeScreen} options={{tabBarIcon: ({focused}) => (
        <CustomIcon name="home" size={25} color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex} />
      )}} />
      <Tab.Screen name="Favourite" component={FavouritesScreen} options={{tabBarIcon: ({focused}) => (
        <CustomIcon name="like" size={25} color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex} />
      )}} />
      <Tab.Screen name="Order" component={OrderHistoryScreen} options={{tabBarIcon: ({focused}) => (
        <CustomIcon name="bell" size={25} color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex} />
      )}}/>
      <Tab.Screen name="Cart" component={CartScreen} options={{tabBarIcon: ({focused}) => (
        <CustomIcon name="cart" size={25} color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex} />
      )}} />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
    tabBarStyle:{
        height:80,
        position:'absolute',
        backgroundColor:COLORS.primaryBlackHex,
        borderTopWidth:0,
        elevation:0,
        borderTopColor: 'transparent',
    },
});
