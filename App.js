import React from 'react';
import { createDrawerNavigator } from 'react-navigation';
import HomeScreen from './screens/Home';
import LiftScreen from './screens/Lift';

const RootStack = createDrawerNavigator(
  {
    Home: HomeScreen,
    Lift: LiftScreen,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'screen',
  }
);

const App = () => <RootStack />;

export default App;
