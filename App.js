import React from 'react';
import { Provider } from 'react-redux';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from "react-navigation";
import { PersistGate } from 'redux-persist/integration/react'
import { Ionicons } from '@expo/vector-icons';
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
      tabBarIcon: ({ focused }) => {
        const color = focused? '#43c744' : '#CED0CE';
        return (
          <Ionicons name="md-home" size={30} color={color}/>
          );
      }
    }
  },
  Charts: {
    screen: ChartStack,
    
    navigationOptions: {
      tabBarIcon: ({ focused }) => {
        const color = focused? '#43c744' : '#CED0CE';
        return (
          <Ionicons name="md-stats" size={30} color={color}/>
          );
      }    
    }
  },
},
{
  tabBarOptions: {
    showLabel: false,
    tabStyle: {
        marginTop: 10,
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