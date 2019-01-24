import React from 'react';
import { Provider } from 'react-redux';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from "react-navigation";
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from './store';
import HomePage from './components/HomePage/HomePage';
import AddHabitForm from './components/AddHabitForm/AddHabitForm';
import GraphScreen from './components/GraphScreen/GraphScreen';

const HomeStack = createStackNavigator({
  Home: HomePage,
  AddHabit: AddHabitForm
});

const ChartStack = createStackNavigator({
  Charts: GraphScreen,
});

const TabNavigator = createBottomTabNavigator({
  Home: HomeStack,
  Charts: ChartStack,
});

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