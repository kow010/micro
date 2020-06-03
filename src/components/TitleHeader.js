/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, Linking} from 'react-native';
import {Icon} from 'native-base';
import Touchable from './Touchable';

const TitleHeader = props => {
  useEffect(() => {}, []);

  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: props.transParent ? 'transparent' : '#fff',
        alignItems: 'center',
        paddingHorizontal: 25,
        paddingVertical: 13,
        borderBottomWidth: props.borderBottomLine && 1,
        borderBottomColor: props.borderBottomLine && '#f0f0f0',
      }}>
      <View style={{flex: 0.1}}>
        {!!props.call && (
          <TouchableOpacity
              onPress={props.call}>
            <Icon
              type={'Feather'}
              name={'phone-call'}
              style={{fontSize: 24, color: '#34558b'}}
            />
          </TouchableOpacity>)}
      </View>
      <View style={{flex: 1}}>
        {!!props.title && (
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 20,
                lineHeight: 29,
                color: '#34558b',
                textAlign: 'center',
                  fontWeight: 'bold',
              }}>
              {props.title}
            </Text>
          </View>)}
      </View>
      <View style={{flex: 0.1}}>
        {!!props.onRightPress && (
          <Touchable
              onPress={props.onRightPress}>
            <Icon
              type={'AntDesign'}
              name={'search1'}
              style={{fontSize: 28, color: '#34558b'}}
            />
          </Touchable>)}
      </View>
    </View>
  );
};

export default TitleHeader;
