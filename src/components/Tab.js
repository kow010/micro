import React, {useContext, useEffect, useState} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import {Container, Content, Row, Icon} from 'native-base';
import Touchable from './Touchable';


const BaseTab = (props) => {

    let [active, setActive] = useState(props.active);

    const onActiveChange = (index) => {
        setActive(index);
        props.onActiveChange(index);
    };

    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                borderBottomWidth: 1, borderColor: '#f4f4f4', paddingHorizontal: 16
            }}
        >
            {props.tabs.map((e, i)=>(
                <Touchable
                    key={i}
                    onPress={()=>onActiveChange(i)}
                    style={{
                        borderBottomWidth: 4, flex: 1,
                        borderBottomColor: active === i ? '#a59beb' : '#fff',
                        alignItems: 'center', justifyContent: 'center',
                        paddingBottom: 10, flexDirection: 'row'
                    }}
                >
                  {active === i && props.icon &&
                    <Image style={{width: 19, height: 16, marginRight: 4}} source={props.icon} resizeMode={'contain'}/>}
                    <Text style={{color: active === i ? '#a59beb' : '#404040', fontSize: 20, lineHeight: 29,
                                  fontWeight: active === i ? 'bold' : 'normal'}}>{e}</Text>
                </Touchable>
            ))}
        </View>
    );
};

export default BaseTab;
