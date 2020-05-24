import React from 'react';
import {View, Text, Image, StyleSheet, Alert} from 'react-native';
import {Container, Content} from 'native-base';
import WhiteSafeAreaView from '../../components/WhiteSafeAreaView';
import {withPreferenceContext} from '../../context/PreferenceContext';
import {withAuthContext} from '../../context/AuthContext';
import Touchable from '../../components/Touchable';
import {
  PATH_AUTH_SIGN_IN,
  PATH_AUTH_SIGN_UP_EMAIL,
  PATH_MAIN,
  PATH_VERIFY_PHONE_NUMBER,
} from '../../router/paths';
import {resetNavigation} from '../../router';
// import {EmailLogin, KakaoLogin, NaverLoginButton} from '../../components/LoginButton';
import {SafeAreaView} from 'react-native-safe-area-context';
// import {smsScope} from './VerifyPhoneNumber';
import api from '../../api_manager';


const Intro = (props) => {

  const onLoginComplete = (res) => {
    let user = res.data;
    console.log(user);
    if(!user.phoneNumber){
      // verifyPhoneNumber(PATH_AUTH_AGREEMENT)
    }else{
      props.auth.fetchProfile().then(ok=>{
        if(props.preference.holdingPage){
          props.navigation.navigate(props.preference.holdingPage);
          props.preference.setHoldingPage(null);
        }else {
          resetNavigation(props.navigation, PATH_MAIN)
        }
      });
    }
  };

  const verifyPhoneNumber = (nextPage) => {
    props.navigation.navigate(PATH_VERIFY_PHONE_NUMBER, {
      onComplete: (phoneNumber)=>{
        api.get('v1/user/check-phone-number/', {phoneNumber: phoneNumber}).then(res=>{
          if(res.data.exists){
            Alert.alert('이미 가입된 번호입니다.');
          }else{
            api.post('v1/users/sign-up/', {email: '', nickname: '펫포회원님'}).then((res, setErrors)=>{
              console.log(res);
              if(!res.ok){
                if(res.errors){
                  setErrors(res.errors);
                }
                return;
              }
            });
            props.navigation.navigate(nextPage);
          }
        });
      },
      scope: smsScope.SIGN_UP,
    });
  };

  return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <Container style={{}}>
          <Content>
            <View style={{paddingTop: 145, alignItems: 'center', justifyContent: 'center'}}>
              {/*<Image source={require('../../images/logo_intro.png')} style={{width: 173, height: 152}} resizeMode={'contain'}/>*/}
            </View>
            <View style={{paddingTop: 87, paddingHorizontal: 56}}>
              <Touchable
                  style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}
                  onPress={() => props.navigation.navigate(PATH_AUTH_SIGN_IN)}>
                  <Text style={{fontSize: 16, lineHeight: 24, color: '#786EB9', textDecorationLine: 'underline', textAlign: 'center',
                    flex: 1}}>
                    로그인
                  </Text>
              </Touchable>
              {/*<View style={{paddingTop: 25}}>*/}
              {/*  <KakaoLogin onComplete={(result) => {*/}
              {/*    api.post('v1/users/sign-in/auth2/', {*/}
              {/*      accessToken: result.accessToken,*/}
              {/*      serviceName: 'KAKAO'*/}
              {/*    }).then(onLoginComplete)*/}
              {/*  }}/>*/}
              {/*</View>*/}
              {/*<View>*/}
              {/*  <NaverLoginButton onComplete={(result)=>{*/}
              {/*    api.post('v1/users/sign-in/auth2/', {*/}
              {/*      accessToken: result.accessToken,*/}
              {/*      serviceName: 'NAVER'*/}
              {/*    }).then(onLoginComplete)*/}
              {/*  }}/>*/}
              {/*</View>*/}
              <View style={{marginTop: 30}}>
                {/*<EmailLogin*/}
                {/*    onPress={() => verifyPhoneNumber(PATH_AUTH_SIGN_UP_EMAIL)}*/}
                {/*/>*/}
              </View>
              <Touchable style={{flex: 1, alignItems: 'center', paddingTop: 25}}
                         onPress={()=>{resetNavigation(props.navigation, PATH_MAIN)}}>
                <Text style={{fontSize: 14, lineHeight: 20, color: '#515151', textDecorationLine: 'underline', textAlign: 'center'}}>둘러보기</Text>
              </Touchable>
            </View>
          </Content>
        </Container>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    color: '#000',
    fontWeight: '700',
    marginBottom: 10,
  },
  input: {
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  forgot: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
  }
});

export default withPreferenceContext(withAuthContext(Intro));
