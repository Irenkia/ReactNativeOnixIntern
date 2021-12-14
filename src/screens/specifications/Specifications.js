import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles';

const Specifications = ({ route }) => {
    const { item } = route.params;
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={{ uri: item.img }} />
            <Text>{item.carBrand + ' ' + item.carModel}</Text>
            <Text style={styles.descriptions}>{item.descriptions}</Text>
        </View>
    );
};
export default Specifications;

Specifications.propTypes = {
    route: PropTypes.object
};
