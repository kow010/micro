/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image} from 'react-native';
import {Container, Content} from 'native-base';
// import {EmailLogin, KakaoLogin, NaverLoginButton} from '../../components/LoginButton';
import {SafeAreaView} from 'react-native-safe-area-context';

const Intro = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <Container style={{}}>
        <Content>
          <View
            style={{
              paddingTop: 145,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('../../images/logo_splash.png')}
              style={{width: 173, height: 152}}
              resizeMode={'contain'}
            />
          </View>
          <View style={{paddingTop: 87, paddingHorizontal: 56}}>
            <View style={{marginTop: 30}}>
              {/*<EmailLogin*/}
              {/*    onPress={() => verifyPhoneNumber(PATH_AUTH_SIGN_UP_EMAIL)}*/}
              {/*/>*/}
            </View>
          </View>
        </Content>
      </Container>
    </SafeAreaView>
  );
};

export default Intro;
