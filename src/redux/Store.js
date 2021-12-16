import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { persistStore } from 'redux-persist';

import ReducerCars from './ReducerCars';

// const persistConfig = {
//     key: 'root',
//     storage: AsyncStorage,
//     whitelist: ['carsBasket']
// };

const rootReducer = combineReducers({ ReducerCars });

export const store = createStore(rootReducer, applyMiddleware(thunk));
// export const persistor = persistStore(store);

