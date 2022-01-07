import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import {ThemeContext} from '../../providers/ThemeProvider';

const Location = () => {
  const {colors} = useContext(ThemeContext);

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <Text style={[{color: colors.text}]}>Location</Text>
    </View>
  );
};

export default Location;
