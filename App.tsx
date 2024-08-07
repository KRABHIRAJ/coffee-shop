/* eslint-disable prettier/prettier */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/navigators/TabNavigator';
import { DetailScreen, PaymentScreen } from './src/screens';
import { Provider } from 'react-redux';
import { store } from './src/store/store';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Tab" component={TabNavigator} options={{animation: 'slide_from_bottom'}}/>
            <Stack.Screen name="Payment" component={PaymentScreen} options={{animation: 'slide_from_bottom'}}/>
            <Stack.Screen name="Details" component={DetailScreen} options={{animation: 'slide_from_bottom'}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

