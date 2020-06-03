/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, Image, Text, Linking, SafeAreaView} from 'react-native';
import {Container, Content, Card} from 'native-base';
import Touchable from '../components/Touchable';
import TitleHeader from '../components/TitleHeader';
import WhiteSafeAreaView from '../components/WhiteSafeAreaView';
import LabelInput from "../components/LabelInput";
import * as yup from 'yup';
import {useFormik} from 'formik';

let Home = () => {

    useEffect(()=>{
    },[]);

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            ipAddress: '',
            eightBitDatas: '',
            temperature: '',
            humidity: '',
        },
        validationSchema: yup.object().shape({
            ipAddress: yup.string().required('필수 항목입니다.'),
            eightBitDatas: yup.string().required('필수 항목입니다.'),
            temperature: yup.string().required('필수 항목입니다.'),
            humidity: yup.string().required('필수 항목입니다.'),
        }),
        onSubmit: (values, {setSubmitting, setErrors}) => {

        },
    });

    const { values, handleChange, errors, setFieldTouched, touched, isValid, isSubmitting, handleSubmit, setFieldValue, resetForm, setErrors } = formik;

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#fafafa'}}>
            <Container style={{}}>
                <TitleHeader
                    title={'마이크로컨트롤러 4조'}
                    call={() => {
                        Linking.openURL(`tel:010-2862-7045`);
                    }}
                    onRightPress={() =>
                        Linking.openURL('https://www.arduino.cc/reference/en')
                    }
                />
                <Content>
                    <View
                        style={{
                            paddingVertical: 16,
                            borderRadius: 10,
                        }}>
                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                            <Image
                                source={require('../images/logo_splash.png')}
                                style={{width: 100, height: 100}}
                                resizeMode={'contain'}
                            />
                        </View>
                        <View style={{
                            backgroundColor: '#2bdff0', justifyContent: 'center', alignItems: 'center', paddingVertical: 5, margin: 16,
                            borderRadius: 3,
                        }}>
                            <Text style={{fontSize: 24, lineHeight: 35}}>Internet기반 원격 제어 프로그램</Text>
                        </View>
                        <View style={{paddingHorizontal: 8}}>
                        <LabelInput
                            label={'원격지 IP 주소'}
                            value={values.ipAddress}
                            placeholder={'0.0.0.0'}
                            autoCapitalize={'none'}
                            onChangeText={handleChange('ipAddress')}
                            onBlur={()=>setFieldTouched('ipAddress')}
                            rightLabel={'연결'}
                            onPress={()=>null}
                        />
                            <LabelInput
                                label={'8-bit 데이터 값\n(10진수)'}
                                value={values.eightBitDatas}
                                placeholder={'00000000'}
                                autoCapitalize={'none'}
                                onChangeText={handleChange('eightBitDatas')}
                                onBlur={()=>setFieldTouched('eightBitDatas')}
                                rightLabel={'전송(write)'}
                                onPress={()=>null}
                            />
                            <Touchable
                                style={{
                                    borderWidth: 1, borderColor: '#34558b', justifyContent: 'center', alignItems: 'center',
                                    paddingVertical: 13, borderRadius: 3, alignSelf: 'flex-end', marginTop: 13, paddingHorizontal: 44,
                                }}
                            >
                                <Text style={{fontSize: 16, color: '#333'}}>초기화</Text>
                            </Touchable>
                            <LabelInput
                                label={'온도 값'}
                                value={values.temperature}
                                placeholder={'36.5'}
                                autoCapitalize={'none'}
                                onChangeText={handleChange('temperature')}
                                onBlur={()=>setFieldTouched('temperature')}
                                rightLabel={'온습도 센서 읽기'}
                                onPress={()=>null}
                            />
                            <LabelInput
                                label={'습도 값'}
                                value={values.humidity}
                                placeholder={'12.3'}
                                autoCapitalize={'none'}
                                onChangeText={handleChange('humidity')}
                                onBlur={()=>setFieldTouched('humidity')}
                                rightLabel={'종료'}
                                onPress={()=>null}
                            />
                        </View>
                    </View>
                </Content>
            </Container>
        </SafeAreaView>
    );
};

export default Home;
