import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Menu from './pages/Menu';
import OneToFive from './pages/OneToFive';
import SixToEight from './pages/SixToEight';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="OneToFive" component={OneToFive} />
        <Stack.Screen name="SixToEight" component={SixToEight} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
