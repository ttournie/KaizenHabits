import React from 'react';
import { Provider } from 'react-redux';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from "react-navigation";
import { PersistGate } from 'redux-persist/integration/react'
import { Ionicons } from '@expo/vector-icons';
import {StyleSheet, View} from 'react-native';
import store, { persistor } from './store';
import HomeScreen from './components/HomeScreen/HomeScreen';
import AddHabitForm from './components/AddHabitForm/AddHabitForm';
import GraphScreen from './components/GraphScreen/GraphScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  AddHabit: AddHabitForm
});

const ChartStack = createStackNavigator({
  Charts: GraphScreen,
});

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      tabBarIcon: <Ionicons name="md-home" size={30} color='#CED0CE'/>,
    }
  },
  Charts: {
    screen: ChartStack,
    
    navigationOptions: {
      tabBarIcon: <Ionicons name="md-stats" size={30} color='#CED0CE'/>,
    }
  },
},
{
  tabBarOptions: {
    showLabel: false,
    tabStyle: {
        marginTop: 20,
    }
  },
}
);

const AppContainer = createAppContainer(TabNavigator);

export class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppContainer/>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;