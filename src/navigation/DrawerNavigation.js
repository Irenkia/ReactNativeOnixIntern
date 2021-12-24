import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Basket from '../screens/Basket/Basket';
import TabNavigation from './TabNavigation';
import Location from '../screens/Location/Location';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <SafeAreaProvider>

            <NavigationContainer>
                < Drawer.Navigator >
                    <Drawer.Screen
                        name='Home'
                        component={TabNavigation}
                    />
                    {/* <Drawer.Screen
                        name='SecondHome'
                        component={TabNavigation}
                    /> */}
                    <Drawer.Screen
                        name='Location'
                        component={Location}
                    />
                    <Drawer.Screen
                        name='Basket'
                        component={Basket}
                    />
                </Drawer.Navigator >
            </NavigationContainer>

        </SafeAreaProvider >
    );
};

export default DrawerNavigation;



