import React, {useContext, useEffect, useState} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import {Container, Content, Row, Icon} from 'native-base';
import Touchable from './Touchable';

const TitleHeader = (props) => {
    const [listFrame, setListFrame] = useState(false);
    useEffect(()=>{

    },[]);

    return (
        <View style={{flexDirection: 'row', backgroundColor: props.transParent ? 'transparent' : '#fff', alignItems: 'center',
                      paddingHorizontal: 17, paddingVertical: 13, borderBottomWidth: props.borderBottomLine && 1,
                      borderBottomColor: props.borderBottomLine && '#f0f0f0'}}>
            <View style={{flex: 0.1}}>
                {!!props.onBack &&
                <TouchableOpacity onPress={props.onBack}>
                    <Icon type={'AntDesign'} name={'left'} style={{fontSize: 24,color: '#404040'}}/>
                </TouchableOpacity>}
                {props.screenHome ?
                    <Touchable onPress={props.leftIconPress} style={{paddingTop: 10}}>
                        <Image style={{width: 24, height: 24}} source={props.leftIcon} resizeMode={'contain'}/>
                    </Touchable> : null}
            </View>
            <View style={{flex: 1, }}>
                {!!props.titleLogo &&
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={{width: 98, height: 35}} source={props.titleLogo} resizeMode={'contain'}/>
                </View>}
                {!!props.title &&
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: 20, lineHeight: 29, color: '#404040', textAlign: 'center'}}>{props.title}</Text>
                </View>}
            </View>
            <View style={{flex: 0.1}}>
                {!!props.titleLogo &&
                <Touchable onPress={props.onFilterPress} style={{paddingTop: 8}}>
                    <Image style={{width: 24, height: 24}} source={props.filter} resizeMode={'contain'}/>
                </Touchable>
                }
                {!!props.close &&
                <Touchable onPress={props.pageBack}>
                    <Icon type={'AntDesign'} name={props.close} style={{fontSize: 28, color: '#A59beb'}}/>
                </Touchable>}
            </View>
        </View>
    );
};

export default TitleHeader;
