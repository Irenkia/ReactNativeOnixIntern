import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Settings from '../screens/settings/Settings';
import TabNavigation from './TabNavigation';
import Location from '../screens/location/Location';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen
                    name='Home'
                    component={TabNavigation}
                />
                <Drawer.Screen
                    name='Location'
                    component={Location}
                />
                <Drawer.Screen
                    name='Settings'
                    component={Settings}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default DrawerNavigation;
