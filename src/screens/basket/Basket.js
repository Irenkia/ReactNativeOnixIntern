import React, {useContext} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {removeCarsBasket} from '../../redux/actions';
import {ThemeContext} from '../../providers/ThemeProvider';
import {styles} from './styles';

export default function Basket() {
  const {colors} = useContext(ThemeContext);

  const {carsBasket} = useSelector(state => state.ReducerCars);
  const dispatch = useDispatch();
  const removeFromCarsBasket = car => dispatch(removeCarsBasket(car));

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.viewTop, {backgroundColor: colors.background}]}>
        <Text style={[styles.textTop, {color: colors.text}]}>Basket</Text>
        <View style={styles.viewBottom}>
          {carsBasket.length === 0 ? (
            <Text style={[styles.textBottom, {color: colors.text}]}>
              Add a car to basket.
            </Text>
          ) : (
            <FlatList
              data={carsBasket}
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => {
                return (
                  <View>
                    <Image style={styles.img} source={{uri: item.img}} />
                    <TouchableOpacity
                      onPress={() => removeFromCarsBasket(item)}>
                      <Text style={[styles.textButton, {color: colors.text}]}>
                        Delete car
                      </Text>
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
