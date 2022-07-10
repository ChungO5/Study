import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Setting from './Setting';
import Webtoon from './Webtoon';

const Tab = createBottomTabNavigator();

const WebtoonScreen = () => {
  return <Webtoon></Webtoon>;
};
const SettingScreen = () => {
  return <Setting></Setting>;
};
const BottomTab = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="a"
          component={WebtoonScreen}
          options={{headerShown: false}}></Tab.Screen>
        <Tab.Screen
          name="SettingScreen"
          component={SettingScreen}
          options={{headerShown: false}}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTab;
