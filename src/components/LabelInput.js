import React, {useContext, useEffect, useState, useRef} from 'react';
import {View, Text, SafeAreaView, FlatList, Alert, StyleSheet, TextInput, Image, TouchableOpacity} from 'react-native';
import Touchable from "./Touchable";


const LabelInput = (props) => {
    const [isFocused, setIsFocused] = useState(false);

    useEffect(()=>{
    },[]);

    return (
        <View style={{paddingTop: 16, flexDirection: 'row', alignItems: 'center', flex: 1}}>
            <View style={{flex: 0.4}}>
                <Text style={{fontSize: 18, color: '#404040', lineHeight: 22, fontWeight: 'bold', marginRight: 4}}>{props.label}</Text>
            </View>
            <View style={{borderWidth: 1, borderColor: isFocused ? '#34558b' : '#dadada', borderRadius: 3, backgroundColor: '#fff', flex: 0.3}}>
                <View style={{flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15}}>
                    <TextInput
                        autoFocus={props.autoFocus}
                        value={props.value}
                        placeholder={props.placeholder}
                        maxLength={props.maxLength}
                        onChangeText={props.onChangeText}
                        secureTextEntry={props.secureTextEntry}
                        blurOnSubmit={props.blurOnSubmit}
                        style={{color: '#333', fontSize: 16, flex: 1}}
                        onBlur={()=>{
                            setIsFocused(false);
                            if(props.onBlur){
                                props.onBlur();
                            }
                        }}
                        keyboardType={props.keyboardType}
                        autoCapitalize={props.autoCapitalize}
                        onFocus={()=>{
                            setIsFocused(true);
                            if(props.onFocus){
                                props.onFocus()
                            }
                        }}
                    />
                </View>
            </View>
            <View style={{flex: 0.4, marginLeft: 20}}>
                <Touchable
                    onPress={props.onPress}
                    style={{
                        borderWidth: 1, borderColor: '#34558b', justifyContent: 'center', alignItems: 'center',
                        paddingVertical: 13, borderRadius: 3
                    }}>
                    <Text style={{fontSize: 16, color: '#333'}}>{props.rightLabel}</Text>
                </Touchable>
            </View>
        </View>
    );
};

export default LabelInput;

const styles = StyleSheet.create({
    label: {
        fontSize: 14,
        marginVertical: 10,
        color: '#999',
    },
    inputLabel: {
        paddingVertical: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
});
