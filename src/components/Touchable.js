import React, {useContext, useEffect, useState} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import {Container, Content, Row, Icon} from 'native-base';


const Touchable = (props) => {

    return (
        <TouchableWithoutFeedback onPress={props.onPress}>
            <View style={props.style}>
                {props.children}
            </View>
        </TouchableWithoutFeedback>
    );
};

export default Touchable;
