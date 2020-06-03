/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import WhiteSafeAreaView from '../components/WhiteSafeAreaView';
import {resetNavigation} from '../router';
import {PATH_AUTH} from '../router/paths';

const Splash = props => {
  useEffect(() => {
    setTimeout(() => {
      resetNavigation(props.navigation, PATH_AUTH);
    }, 1500);
  }, [props.navigation]);

  return (
    <WhiteSafeAreaView>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 150,
        }}>
        <Image
          style={{width: 173, height: 152}}
          source={require('../images/logo_splash.png')}
          resizeMode={'contain'}
        />
      </View>
    </WhiteSafeAreaView>
  );
};

export default Splash;
