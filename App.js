/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {PreferenceContextProvider} from './src/context/PreferenceContext';
import {AuthContextProvider} from './src/context/AuthContext';
import {Root} from 'native-base';
import MyStack from './src/router';


const App: () => React$Node = () => {
  return (
      <PreferenceContextProvider>
        <AuthContextProvider>
          <Root>
            <NavigationContainer>
              <MyStack/>
            </NavigationContainer>
          </Root>
        </AuthContextProvider>
      </PreferenceContextProvider>
  );
};


export default App;
