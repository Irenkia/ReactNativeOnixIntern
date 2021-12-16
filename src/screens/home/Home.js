import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { styles } from './styles';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { LIST_CARS } from '../../constants/Constants';

import { addCarsBasket } from '../../redux/Actions';

const Home = ({ navigation }) => {
    const dispatch = useDispatch();

    const addToBasket = (car) => {
        dispatch(addCarsBasket(car));
    };
    return (

        <View style={styles.container}>

            <FlatList
                data={LIST_CARS}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.wrapper}>
                            <Image style={styles.img} source={{ uri: item.img }} />
                            <View>
                                <TouchableOpacity onPress={() => navigation.navigate('Specifications', { item })}>
                                    <Text style={styles.text}>{item.carBrand + ' ' + item.carModel}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => addToBasket(item)}>
                                    <Text>Add to basket</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    );
                }}
            />
        </View>


    );
};
export default Home;

Home.propTypes = {
    navigation: PropTypes.object,
    navigate: PropTypes.func
};
