import React, {useContext} from 'react';
import {View, Text, Image} from 'react-native';
import PropTypes from 'prop-types';
import {styles} from './styles';
import {ThemeContext} from '../../providers/ThemeProvider';

const Specifications = ({route}) => {
  const {colors} = useContext(ThemeContext);

  const {item} = route.params;
  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <Image style={styles.img} source={{uri: item.img}} />
      <Text style={[styles.text, {color: colors.text}]}>
        {item.carBrand + ' ' + item.carModel}
      </Text>
      <Text style={[styles.descriptions, {color: colors.text}]}>
        {item.descriptions}
      </Text>
    </View>
  );
};
export default Specifications;

Specifications.propTypes = {
  route: PropTypes.object,
};
