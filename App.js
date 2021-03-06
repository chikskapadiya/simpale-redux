import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/Screen/HomeScreen';
import {Provider} from 'react-redux';
import {store} from '../projectRedux/src/redux/Store/store';
import IndexScreen from './src/Screen/IndexScreen';
import DemoScreen from './src/Screen/DemoScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="IndexScreen" component={IndexScreen} />
          <Stack.Screen name="DemoScreen" component={DemoScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
