import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home/Home';
import Specifications from '../screens/Specifications/Specifications';
//import SecondHome from '../screens/Home/SecondHome';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen
                name='Home'
                component={Home}
                options={{ headerShown: false }}
            />
            {/* <Stack.Screen
                name='SecondHome'
                component={SecondHome}
                options={{ headerShown: false }}
            /> */}
            <Stack.Screen
                name='Specifications'
                component={Specifications}
            />
        </Stack.Navigator>
    );
};

export default StackNavigation;