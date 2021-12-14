import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Settings from '../screens/settings/Settings';
import StackNavigation from './StackNavigation';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName='StackNavigation'
                screenOptions={{
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray'
                }}
            >
                <Tab.Screen
                    name='StackNavigation'
                    component={StackNavigation}
                    options={{
                        headerShown: false, title: 'Home', tabBarIcon: ({ size, color }) => {
                            return <Ionicons name={'home'} size={size} color={color} />;
                        }
                    }}
                />
                <Tab.Screen
                    name='Settings'
                    component={Settings}
                    options={{
                        tabBarIcon: ({ size, color }) => {
                            return <Ionicons name={'settings'} size={size} color={color} />;

                        }
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default TabNavigation;