/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, Image, Text, Linking} from 'react-native';
import {Container, Content, Card} from 'native-base';
import Touchable from '../../components/Touchable';
import TitleHeader from "../../components/TitleHeader";
import WhiteSafeAreaView from "../../components/WhiteSafeAreaView";

const Intro = () => {
    const [temperature, setTemperature] = useState(null);

    return (
        <WhiteSafeAreaView>
            <Container style={{marginHorizontal: 16}}>
                <TitleHeader title={'마이크로컨트롤러 4조'}
                             call={()=>{Linking.openURL(`tel:010-2862-7045`)}}
                             onRightPress={()=>Linking.openURL('https://www.arduino.cc/reference/en')}/>
                <Content>
                    <Card style={{padding: 16, marginTop: 30}}>
                    <View
                        style={{
                            paddingTop: 30,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                        <Image
                            source={require('../../images/logo_splash.png')}
                            style={{width: 173, height: 152}}
                            resizeMode={'contain'}
                        />
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#e5f0ff', borderRadius: 3, paddingVertical: 20,
                        paddingHorizontal: 20, marginTop: 30,
                    }}>
                        <Text style={{textAlign: 'center', fontSize: 24, lineHeight: 35, color: '#34558b'}}>
                            {temperature ? temperature : '온도'}
                        </Text>
                    </View>
                    <View style={{paddingTop: 30, paddingHorizontal: 16, justifyContent: 'center', alignItems: 'center'}}>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginTop: 50,
                            }}>
                            <Touchable
                                onPress={()=>null}
                                style={{
                                    justifyContent: 'center', alignItems: 'center',
                                    padding: 20, borderRadius: 10, backgroundColor: '#e5f0ff'
                                }}>
                                <Text style={{fontSize: 16, lineHeight: 20, color: '#34558b'}}>섭씨 변환</Text>
                            </Touchable>
                            <Touchable
                                onPress={()=>null}
                                style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    padding: 20, marginLeft: 50, borderRadius: 10,
                                    backgroundColor: '#e5f0ff'
                                }}>
                                <Text style={{fontSize: 16, lineHeight: 20, color: '#34558b'}}>화씨 변환</Text>
                            </Touchable>
                        </View>
                    </View>
                    </Card>
                </Content>
            </Container>
        </WhiteSafeAreaView>
    );
};

export default Intro;
