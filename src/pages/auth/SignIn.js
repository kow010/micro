// import React, {useContext, useEffect, useState, useRef} from 'react';
// import {View, Text, SafeAreaView, Alert, TextInput, TouchableOpacity, StyleSheet, Image} from 'react-native';
// import {Container, Content, Row, Icon} from 'native-base';
// import {useFormik} from 'formik';
// import * as yup from 'yup';
// import api from '../../api_manager';
// import {
//     PATH_AUTH_INTRO,
//     PATH_MAIN,
//     PATH_SPLASH,
//     PATH_VERIFY_PHONE_NUMBER,
// } from '../../router/paths';
// import {resetNavigation} from '../../router';
// import TitleHeader from '../../components/TitleHeader';
// import LabelInput from '../../components/LabelInput';
// // import {KakaoLogin, NaverLoginButton} from '../../components/LoginButton';
// // import {smsScope} from './VerifyPhoneNumber';
// import WhiteSafeAreaView from '../../components/WhiteSafeAreaView';
// import Touchable from '../../components/Touchable';
//
// const SignIn = (props) => {
//
//     useEffect(()=>{
//
//     },[]);
//
//     const onLoginComplete = (res) => {
//         let user = res.data;
//         if(!user.phoneNumber){
//             verifyPhoneNumber(PATH_AUTH_AGREEMENT)
//         }else{
//             props.navigation.navigate(PATH_SPLASH)
//         }
//     };
//
//
//     const verifyPhoneNumber = (nextPage) => {
//         props.navigation.navigate(PATH_VERIFY_PHONE_NUMBER, {
//             onComplete: (phoneNumber)=>{
//                 api.get('v1/user/check-phone-number/', {phoneNumber: phoneNumber}).then(res=>{
//                     if(res.data.exists){
//                         Alert.alert('이미 가입된 번호입니다.');
//                     }else{
//                         api.post('v1/users/sign-up/', {email: '', nickname: '펫포회원님'}).then((res, setErrors)=>{
//                             console.log(res);
//                             if(!res.ok){
//                                 if(res.errors){
//                                     setErrors(res.errors);
//                                 }
//                                 return;
//                             }
//                         });
//                         props.navigation.navigate(nextPage);
//                     }
//                 });
//             },
//             scope: smsScope.SIGN_UP,
//         });
//     };
//
//     const formik = useFormik({
//         enableReinitialize: true,
//         initialValues: {
//             email: '',
//             password: '',
//         },
//         validationSchema: yup.object().shape({
//             email: yup.string().email('존재하지 않는 아이디입니다.').required('필수 항목입니다.'),
//             password: yup.string().min(8,'비밀번호를 다시 확인해주세요.').required('필수 항목입니다.'),
//         }),
//         onSubmit: (values, {setSubmitting, setErrors}) => {
//             console.log(values);
//             api.post('v1/users/sign-in/', values).then(res=>{
//                 if(res.errors){
//                     setErrors(res.errors);
//                     console.log(res.errors);
//                     return
//                 }
//                 resetNavigation(props.navigation, PATH_SPLASH)
//             })
//         },
//     });
//
//     const { values, handleChange, errors, setFieldTouched, touched, isValid, isSubmitting, handleSubmit, setFieldValue, resetForm, setErrors } = formik;
//
//     return (
//         <WhiteSafeAreaView>
//             <Container>
//                 <TitleHeader onBack={() => {props.navigation.goBack()}}/>
//                 <Content contentContainerStyle={{paddingBottom: 30}}>
//                     <View style={{paddingHorizontal: 56, paddingTop: 66}}>
//                         <View style={{justifyContent: 'center', alignItems: 'center'}}>
//                             <Image style={{width: 173, height: 152}} source={require('../../images/logo_intro.png')} resizeMode={'contain'}/>
//                         </View>
//                         <LabelInput
//                             label={'이메일'}
//                             placeholder={'abc@gmail.com'}
//                             value={values.email}
//                             onChangeText={handleChange('email')}
//                             autoCapitalize={'none'}
//                             onBlur={()=>{setFieldTouched('email')}}
//                             autuFocus={true}
//                         />
//                         {touched.email && errors.email &&
//                         <Text style={{textAlign: 'right', color: 'red', marginTop: 4}}>
//                             {errors.email}
//                         </Text>}
//                         <LabelInput
//                             label={'비밀번호'}
//                             placeholder={'8자리 이상 입력해주세요.'}
//                             value={values.password}
//                             onChangeText={handleChange('password')}
//                             autoCapitalize={'none'}
//                             onBlur={()=>{setFieldTouched('password')}}
//                             secureTextEntry
//                             blurOnSubmit={false}
//                         />
//                         {touched.password && errors.password &&
//                         <Text style={{textAlign: 'right', color: 'red', marginTop: 4}}>
//                             {errors.password}
//                         </Text>}
//                         <View style={{paddingTop: 16}}>
//                             <Touchable
//                                 onPress={handleSubmit}
//                                 isValid={isValid && !!values.email}
//                                 style={{justifyContent: 'center', alignItems: 'center', paddingVertical: 11, borderRadius: 5,
//                                     backgroundColor: isValid ? '#a59beb' : '#adadad'}}>
//                                 <Text style={{fontSize: 18, lineHeight: 26, fontWeight: '500', color: '#fff'}}>로그인</Text>
//                             </Touchable>
//                         </View>
//                         <View style={{paddingTop: 16}}>
//                             <Touchable
//                                 onPress={()=>{setFieldValue('email',''); setFieldValue('password','');
//                                                 props.navigation.navigate(PATH_FIND_ACCOUNT);}}>
//                                 <Text style={styles.forgot}>아이디/비밀번호 찾기</Text>
//                             </Touchable>
//                         </View>
//                     </View>
//                     {/*<View style={{alignItems: 'center', paddingTop: 33}}>*/}
//                     {/*    <Text style={{fontSize: 16, color:'#515151', lineHeight: 24}}>SNS계정으로 로그인</Text>*/}
//                     {/*</View>*/}
//                     {/*<Row style={{paddingTop: 15, justifyContent: 'center'}}>*/}
//                     {/*    <KakaoLogin*/}
//                     {/*        small*/}
//                     {/*        onComplete={(result)=>{*/}
//                     {/*            api.post('v1/users/sign-in/auth2/', {*/}
//                     {/*                accessToken: result.accessToken,*/}
//                     {/*                serviceName: 'KAKAO'*/}
//                     {/*            }).then(onLoginComplete)*/}
//                     {/*        }}*/}
//                     {/*    />*/}
//                     {/*    <View style={{width: 16}}/>*/}
//                     {/*    <NaverLoginButton*/}
//                     {/*        small*/}
//                     {/*        onComplete={(result)=>{*/}
//                     {/*        api.post('v1/users/sign-in/auth2/', {*/}
//                     {/*            accessToken: result.accessToken,*/}
//                     {/*            serviceName: 'NAVER'*/}
//                     {/*        }).then(onLoginComplete)*/}
//                     {/*    }}/>*/}
//                     {/*</Row>*/}
//                 </Content>
//             </Container>
//         </WhiteSafeAreaView>
//     );
// };
//
// const styles = StyleSheet.create({
//     label: {
//         fontSize: 14,
//         marginVertical: 10,
//         color: '#999',
//     },
//     title: {
//         fontSize: 18,
//         color: '#000',
//         fontWeight: '700',
//         marginBottom: 10,
//     },
//     input: {
//         paddingVertical: 5,
//         borderBottomWidth: 1,
//         borderBottomColor: '#ccc',
//     },
//     forgot: {
//         fontSize: 16,
//         lineHeight: 24,
//         textDecorationLine: 'underline',
//         color: '#a59beb',
//         textAlign: 'center',
//     }
// });
//
// export default SignIn;
