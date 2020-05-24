import React, {useEffect} from 'react';
import {View, Image, Text} from 'react-native';
import WhiteSafeAreaView from '../components/WhiteSafeAreaView';
import {withAuthContext} from '../context/AuthContext';
import {resetNavigation} from '../router';
import {PATH_AUTH, PATH_MAIN} from '../router/paths';

const Splash = (props) => {

    useEffect(() => {
        // api.get('v1/users/sign-out/');
        // props.auth.fetchProfile().then(ok=>{
        //     let resetPage = PATH_MAIN;
        //     console.log(ok);
        //     if(!ok){resetPage = PATH_AUTH}
        //
        //     setTimeout(()=>{
        //         resetNavigation(props.navigation, resetPage)
        //     }, 1000);
        // });
        setTimeout(()=>{
            resetNavigation(props.navigation, PATH_AUTH)
        }, 1000);
    }, []);

  return(
      <WhiteSafeAreaView>
        <View style={{justifyContent: 'center', alignItems: 'center', paddingTop: 315}}>
          <Image style={{width: 154, height: 55}} source={require('../images/logo_splash.png')} resizeMode={'contain'}/>
        </View>
      </WhiteSafeAreaView>
    )
};

export default withAuthContext(Splash);
