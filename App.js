import React from 'react';
import { Provider } from 'react-redux';
import { NavigatorIOS } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from './store';
import HomePage from './components/HomePage/HomePage';
import AddHabitForm from './components/AddHabitForm/AddHabitForm';

export default class App extends React.Component {

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
          <NavigatorIOS
            ref='nav'
            initialRoute={{
              component: HomePage,
              title: '',
              rightButtonTitle: 'Add',
              leftButtonTitle: 'Edit',
              onRightButtonPress: () => this._handleNavigationRequest(),
            }}
            style={{flex: 1}}
          />
        </PersistGate>
      </Provider>
    );
  }
}
