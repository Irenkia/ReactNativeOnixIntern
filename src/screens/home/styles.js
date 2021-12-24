import { StyleSheet } from 'react-native';
import { StatusBar } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        marginHorizontal: 16
    },
    img: {
        width: 155,
        height: 125,
        marginRight: 10,
        resizeMode: 'stretch'
    },
    wrapper: {
        margin: 12,
        display: 'flex',
        flexDirection: 'row'
    },
    text: {
        fontSize: 21,
        color: 'black'
    },
    item: {
        backgroundColor: '#6E7F80',
        padding: 15,
        marginVertical: 8,
        fontSize: 17,
        // color: 'black'
        color: 'white'
    },
    basket: {
        backgroundColor: '#D0D3C2',
        padding: 10,
        marginVertical: 8,
        color: 'black'
        // color: 'white'
    },
    header: {
        fontSize: 32,
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 24
    },
    switch: {
        backgroundColor: '#6E7F80',
        padding: 15,
        marginVertical: 8,
        fontSize: 17,
        // color: 'black'
        color: 'white',
        textAlign: 'right'
        // alignSelf: 'flex-end'
    }
});