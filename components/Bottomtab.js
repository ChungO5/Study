import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Setting from './page/Setting';
import Webtoon from './page/Webtoon';
import FinishWebtoon from './page/FinishWebtoon';
import BestChallenge from './page/BestChallenge';
import MyPage from './page/MyPage';

const Tab = createBottomTabNavigator();

const WebtoonScreen = () => {
  return <Webtoon></Webtoon>;
};
const FinishScreen = () => {
  return <FinishWebtoon></FinishWebtoon>;
};
const BestChallengeScreen = () => {
  return <BestChallenge></BestChallenge>;
};
const MYScreen = () => {
  return <MyPage></MyPage>;
};
const SettingScreen = () => {
  return <Setting></Setting>;
};

const BottomTab = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="웹툰"
          component={WebtoonScreen}
          options={{headerShown: false}}></Tab.Screen>
        <Tab.Screen
          name="추천완결"
          component={FinishScreen}
          options={{headerShown: false}}></Tab.Screen>
        <Tab.Screen
          name="베스트 도전"
          component={BestChallengeScreen}
          options={{headerShown: false}}></Tab.Screen>
        <Tab.Screen
          name="My"
          component={MYScreen}
          options={{headerShown: false}}></Tab.Screen>
        <Tab.Screen
          name="더보기"
          component={SettingScreen}
          options={{headerShown: false}}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTab;
