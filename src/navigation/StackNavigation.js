import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home/Home';
import Specifications from '../screens/Specifications/Specifications';
import {ThemeContext} from '../providers/ThemeProvider';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  const {colors} = useContext(ThemeContext);

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Specifications"
        component={Specifications}
        options={{
          headerStyle: {
            backgroundColor: colors.background,
          },
          headerTintColor: colors.text,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
