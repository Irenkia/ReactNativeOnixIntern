import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, StatusBar, LogBox, Text } from 'react-native';
LogBox.ignoreLogs(['Reanimated 2']);

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle='default' />
      <Text>Hi!</Text>
    </View>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

