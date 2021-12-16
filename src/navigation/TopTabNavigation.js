import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Home from '../screens/home/Home';
import Basket from '../screens/BookmarksList';

const Tab = createMaterialTopTabNavigator();

function TopTabNavigation() {
    return (

        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Basket" component={Basket} />
        </Tab.Navigator>

    );
}
export default TopTabNavigation;