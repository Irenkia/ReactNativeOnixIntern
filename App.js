import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, StatusBar, LogBox } from 'react-native';
LogBox.ignoreLogs(['Reanimated 2']);
import DrawerNavigation from './src/navigation/DrawerNavigation';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle='default' />
      <DrawerNavigation />
    </View>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});