import React from 'react';
import { SafeAreaView, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeCarsBasket } from '../../redux/Actions';

export default function Basket() {

    const { carsBasket } = useSelector(state => state.ReducerCars);
    const dispatch = useDispatch();
    const removeFromCarsBasket = car => dispatch(removeCarsBasket(car));

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1E1B26' }}>
            <View style={{ flex: 1, paddingHorizontal: 16 }}>
                <Text style={{ color: 'white', fontSize: 22 }}>Basket</Text>
                <View style={{ flex: 1, marginTop: 8 }}>
                    {carsBasket.length === 0 ? (
                        <Text style={{ color: '#64676D', fontSize: 18 }}>
                            Add a car to basket.
                        </Text>
                    ) : (
                        <FlatList
                            data={carsBasket}
                            keyExtractor={item => item.id.toString()}
                            renderItem={({ item }) => {
                                return (
                                    <View>
                                        <Image style={{ width: 100, height: 100 }} source={{ uri: item.img }} />
                                        <TouchableOpacity onPress={() => removeFromCarsBasket(item)}>
                                            <Text style={{ color: 'white', fontSize: 15 }}>Delete car</Text>
                                        </TouchableOpacity>
                                    </View>
                                );
                            }}
                            showsVerticalScrollIndicator={false}
                        />
                    )}
                </View>
            </View>
        </SafeAreaView>
    );
}