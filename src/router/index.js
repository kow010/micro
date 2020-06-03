import React from 'react';
import {CommonActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {PATH_MAIN, PATH_MAIN_HOME, PATH_MAIN_INTRO, PATH_SPLASH} from './paths';
import Splash from '../pages/Splash';
import Intro from '../pages/Intro';
import {Icon} from "native-base";
import createBottomTabNavigator from "@react-navigation/bottom-tabs/src/navigators/createBottomTabNavigator";
import Home from "../pages/Home";

const Tab = createBottomTabNavigator();
function MainTabs() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#34558b',
            }}
        >
            <Tab.Screen
                name={PATH_MAIN_HOME}
                component={Home}
                options={{
                    tabBarLabel: '홈',
                    tabBarIcon: ({focused}) => <Icon style={{fontSize: 25, color: focused ? '#34558b' : '#333'}} type={'AntDesign'} name={'home'}/>
                }}
            />
            <Tab.Screen
                name={PATH_MAIN_INTRO}
                component={Intro}
                options={{
                    tabBarLabel: '최종 프로젝트',
                    tabBarIcon: ({focused}) => <Icon style={{fontSize: 25, color: focused ? '#34558b' : '#333'}} type={'AntDesign'} name={'warning'}/>
                }}
            />
        </Tab.Navigator>
    );
}


const Stack = createStackNavigator();
function AppStack() {
  return (
    <Stack.Navigator initialRouteName={PATH_SPLASH} headerMode={'none'}>
      <Stack.Screen name={PATH_SPLASH} component={Splash} />
        <Stack.Screen name={PATH_MAIN} component={MainTabs}/>
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
