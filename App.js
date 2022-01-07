import 'react-native-gesture-handler';
import React from 'react';
//import React, { useEffect } from 'react';
import {StyleSheet, View, StatusBar, LogBox} from 'react-native';
LogBox.ignoreLogs(['Reanimated 2']);
import DrawerNavigation from './src/navigation/DrawerNavigation';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/redux/store';
import ThemeProvider from './src/providers/ThemeProvider';
//import RNBootSplash from 'react-native-bootsplash';

const App = () => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     RNBootSplash.hide({ fade: true });
  //   }, 3000);
  // }, []);
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar barStyle="default" />
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider>
            <DrawerNavigation />
          </ThemeProvider>
        </PersistGate>
      </View>
    </Provider>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
