import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
export const ShowString = ({ data, name }) => {
    return (
        <View style={styles.container}>
            <Text>{data + ' ' + name + '!'}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50'
    }
});

ShowString.propTypes = {
    props: PropTypes.string,
    data: PropTypes.string,
    name: PropTypes.string
};