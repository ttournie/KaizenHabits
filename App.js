import React from 'react';
import { Provider } from 'react-redux';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from './store';
import HomePage from './components/HomePage/HomePage';
import AddHabitForm from './components/AddHabitForm/AddHabitForm';

const AppNavigator = createStackNavigator({
  Home: HomePage,
  AddHabit: AddHabitForm
});

const AppContainer = createAppContainer(AppNavigator);

export class App extends React.Component {
  

  _handleNavigationRequest() {
    this.refs.nav.push({
      component: AddHabitForm,
      title: 'Add a new habit',
    });
  }

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