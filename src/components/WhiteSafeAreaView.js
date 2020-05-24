import React, {useContext, useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';


const WhiteSafeAreaView = (props) => {

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
            {props.children}
        </SafeAreaView>
    );
};

export default WhiteSafeAreaView;
