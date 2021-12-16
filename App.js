import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, StatusBar, LogBox } from 'react-native';
LogBox.ignoreLogs(['Reanimated 2']);
import DrawerNavigation from './src/navigation/DrawerNavigation';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
import { store } from './src/redux/Store';
// import { store, persistor } from './src/redux/Store';

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar barStyle='default' />
        <DrawerNavigation />
      </View>
    </Provider>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});