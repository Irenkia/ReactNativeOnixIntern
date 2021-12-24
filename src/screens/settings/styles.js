import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F3F3F3'
    },
    img: {
        width: 155,
        height: 125,
        marginRight: 10,
        resizeMode: 'stretch'
    },
    wrapper: {
        margin: 10,
        display: 'flex',
        flexDirection: 'row'
    },
    text: {
        fontSize: 21,
        color: 'black'
    },
    item: {
        backgroundColor: '#F0EAD6',
        padding: 15,
        marginVertical: 8,
        fontSize: 17,
        color: 'black'
        // white-space: pre-line
    },
    basket: {
        backgroundColor: '#6E7F80',
        padding: 10,
        marginVertical: 8,
        color: 'white'
    },
    header: {
        fontSize: 32,
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 24
    },
    denotation: {
        fontSize: 24,
        backgroundColor: '#F0EAD6',
        padding: 15,
        marginVertical: 8,
        // fontSize: 17,
        color: 'black'
    }
});