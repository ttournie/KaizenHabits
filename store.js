import { createStore, combineReducers } from 'redux';
import { AsyncStorage } from "react-native"
import { reducer as formReducer } from 'redux-form';
import { persistStore, persistReducer } from 'redux-persist'
import HabitReducer from './reducers/habits';

const rootReducer = combineReducers({
    form: formReducer,
    habits: HabitReducer,
  });
  
  const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  };
  
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = createStore(persistedReducer);
  
  export const persistor = persistStore(store)
  export default store;
