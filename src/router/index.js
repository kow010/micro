import React from 'react';
import {CommonActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {PATH_AUTH, PATH_AUTH_INTRO, PATH_SPLASH} from './paths';
import Splash from '../pages/Splash';
import Intro from '../pages/auth/Intro';

const AuthStackNavigator = createStackNavigator();
function AuthStack() {
  return (
    <AuthStackNavigator.Navigator
      initialRouteName={PATH_AUTH_INTRO}
      headerMode={'none'}>
      <AuthStackNavigator.Screen name={PATH_AUTH_INTRO} component={Intro} />
    </AuthStackNavigator.Navigator>
  );
}

const Stack = createStackNavigator();
function AppStack() {
  return (
    <Stack.Navigator initialRouteName={PATH_SPLASH} headerMode={'none'}>
      <Stack.Screen name={PATH_SPLASH} component={Splash} />
      <Stack.Screen name={PATH_AUTH} component={AuthStack} />
    </Stack.Navigator>
  );
}

export const resetNavigation = (navigation, path) => {
  const reset = CommonActions.reset({
    index: 0,
    routes: [{name: path}],
    // key: null,
  });
  navigation.dispatch(reset);
};

export default AppStack;
