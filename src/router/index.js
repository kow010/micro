import React from 'react';
import {Image} from 'react-native';
import {CommonActions, StackActions} from '@react-navigation/native';
import { createStackNavigator, } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import Home from '../pages/Home';
import {
    PATH_AUTH,
    PATH_AUTH_INTRO,
    PATH_AUTH_SIGN_IN,
    PATH_AUTH_SIGN_UP_EMAIL,
    PATH_CHANGE_PASSWORD,
    PATH_MAIN,
    PATH_MAIN_HOME,
    PATH_MAIN_SHOP,
    PATH_MY_PAGE,
    PATH_SHOP_DETAIL,
    PATH_SPLASH,
    PATH_VERIFY_PHONE_NUMBER,
} from './paths';
import Splash from '../pages/Splash';
// import ShopDetail from '../pages/main/ShopDetail';
// import ChangePassword from '../pages/myInfo/ChangePassword';
// import VerifyPhoneNumber from '../pages/auth/VerifyPhoneNumber';
import Intro from '../pages/auth/Intro';
import SignIn from '../pages/auth/SignIn';
// import SignUpEmail from '../pages/auth/SignUpEmail';
// import ShopList from '../pages/main/ShopList';
// import MyPage from '../pages/myInfo/MyPage';

// const Tab = createBottomTabNavigator();
// function MainTabs() {
//     return (
//         <Tab.Navigator
//             tabBarOptions={{
//                 activeTintColor: '#a59beb',
//             }}
//         >
//             <Tab.Screen
//                 name={PATH_MAIN_HOME}
//                 component={Home}
//                 options={{
//                     tabBarLabel: '홈',
//                     tabBarIcon: ({focused}) => {
//                         return <Image
//                             source={focused ? require('../images/icon_home_focus.png') : require('../images/icon_home_unFocus.png')}
//                             style={{width: 28, height: 25}}
//                             resizeMode={'contain'}
//                         />
//                     },
//                 }}
//             />
//             <Tab.Screen
//                 name={PATH_MAIN_SHOP}
//                 component={ShopList}
//                 options={{
//                     tabBarLabel: '가맹점',
//                     tabBarIcon: ({focused}) => {
//                         return <Image source={focused ? require('../images/icon_shop_focus.png') : require('../images/icon_shop_bottom.png')}
//                                       style={{width: 23, height: 25}}
//                                       resizeMode={'contain'}/>
//                     },
//                 }}
//             />
//             <Tab.Screen
//                 name={PATH_MY_PAGE}
//                 component={MyPage}
//                 options={{
//                     tabBarLabel: '마이페이지',
//                     tabBarIcon: ({focused}) => {
//                         return <Image source={focused ? require('../images/icon_mypage_focus.png') : require('../images/icon_mypage_bottom.png')}
//                                       style={{width: 30, height: 25}}
//                                       resizeMode={'contain'}/>
//                     },
//                 }}
//             />
//         </Tab.Navigator>
//     );
// }

const AuthStackNavigator = createStackNavigator();
function AuthStack() {
    return (
        <AuthStackNavigator.Navigator
            initialRouteName={PATH_AUTH_INTRO}
            headerMode={'none'}
        >
            <AuthStackNavigator.Screen name={PATH_AUTH_INTRO} component={Intro}/>
            {/*<AuthStackNavigator.Screen name={PATH_AUTH_SIGN_IN} component={SignIn}/>*/}
            {/*<AuthStackNavigator.Screen name={PATH_AUTH_SIGN_UP_EMAIL} component={SignUpEmail}/>*/}
        </AuthStackNavigator.Navigator>
    )
}


const Stack = createStackNavigator();
function AppStack() {
    return (
        <Stack.Navigator
            initialRouteName={PATH_SPLASH}
            headerMode={'none'}
        >
            <Stack.Screen name={PATH_SPLASH} component={Splash}/>
            <Stack.Screen name={PATH_AUTH} component={AuthStack}/>
            {/*<Stack.Screen name={PATH_MAIN} component={MainTabs}/>*/}
            {/*<Stack.Screen name={PATH_SHOP_DETAIL} component={ShopDetail}/>*/}
            {/*<Stack.Screen name={PATH_CHANGE_PASSWORD} component={ChangePassword}/>*/}
            {/*<Stack.Screen name={PATH_VERIFY_PHONE_NUMBER} component={VerifyPhoneNumber}/>*/}
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













