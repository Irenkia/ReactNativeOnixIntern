import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home/Home';
import Specifications from '../screens/specifications/Specifications';

const Stack = createNativeStackNavigator();

const NavigationStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen
                    name='Home'
                    component={Home}
                />
                <Stack.Screen
                    name='Specifications'
                    component={Specifications}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default NavigationStack;