import React, {useState, useEffect} from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {View, Text} from 'react-native';
import Webtoon from './components/Webtoon';
import Setting from './components/Setting';

const Tab = createMaterialBottomTabNavigator();
const WebtoonScreen = () => {
  return <Webtoon></Webtoon>;
};
const SettingScreen = () => {
  return <Setting></Setting>;
};
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="웹툰" component={WebtoonScreen}></Tab.Screen>
        <Tab.Screen name="SettingScreen" component={SettingScreen}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
