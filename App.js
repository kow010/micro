/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Root} from 'native-base';
import MyStack from './src/router';

if(process.env.NODE_ENV === 'production'){
    const emptyFunction = () => {};
    console.error = emptyFunction;
    console.log = emptyFunction;
    console.info = emptyFunction;
    console.table = emptyFunction;
    console.warn = emptyFunction;
    console.trace = emptyFunction;
    console.debug = emptyFunction;
}

const App: () => React$Node = () => {
  return (
          <Root>
            <NavigationContainer>
              <MyStack/>
            </NavigationContainer>
          </Root>
  );
};


export default App;
