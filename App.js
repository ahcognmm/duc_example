/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Home from './src/screens/Home';
import Comment from './src/screens/Comment';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ReactionModal from './src/screens/Reaction';
import { navigationRef } from './RootNavigation';

const Stack = createStackNavigator();
const { Navigator, Screen } = Stack;

const App = () => {
  return (
    // <Home />
    <NavigationContainer ref={navigationRef}>
      <Navigator initialRouteName="Comment" mode="modal" headerMode="none">
        <Screen name="Comment" component={Comment} />
        <Screen name="Home" component={Home} />

        <Screen name="Reaction" component={ReactionModal}
          options={{
            cardStyle: {
              backgroundColor: "rgba(0,0,0,0.7)",
            },
            cardShadowEnabled: false,
            cardOverlayEnabled: false,
          }} />
      </Navigator>
    </NavigationContainer>
  );
};
export default App;
