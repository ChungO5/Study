/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {Text, View, Image, FlatList, StyleSheet} from 'react-native';
import Banner from './components/Banner';
import BottomTab from './components/Bottomtab';
const Data1 = [
  {
    rank: '1',
    webImg: require('./image/1.jpg'),
    title: '전지적 독자 시점',
    grade: '★ 9.1',
    writer: 'UMI / 슬리피-C / 싱숑',
  },
  {
    rank: '2',
    webImg: require('./image/2.jpg'),
    title: '화산귀환',
    grade: '★ 9.2',
    writer: 'LICO / 비가',
  },
  {
    rank: '3',
    webImg: require('./image/3.jpg'),
    title: '김부장 ',
    grade: '★ 9.3',
    writer: '박태준 만화회사 / 정종택',
  },
  {
    rank: '4',
    webImg: require('./image/4.jpg'),
    title: '신의 탑',
    grade: '★ 9.4',
    writer: 'SIU',
  },
  {
    rank: '5',
    webImg: require('./image/5.jpg'),
    title: '입학용병',
    grade: '★ 9.5',
    writer: 'YC / 락현',
  },
  {
    rank: '6',
    webImg: require('./image/6.jpg'),
    title: '연애혁명',
    grade: '★ 9.6',
    writer: '232',
  },
  {
    rank: '7',
    webImg: require('./image/7.jpg'),
    title: '독립일기',
    grade: '★ 9.7',
    writer: '자까',
  },
  {
    rank: '8',
    webImg: require('./image/8.jpg'),
    title: '윈드브레이커',
    grade: '★ 9.8',
    writer: '조용석',
  },
  {
    rank: '9',
    webImg: require('./image/9.jpg'),
    title: '튜토리얼 탑의 고인물',
    grade: '★ 9.9',
    writer: '루비 / 방구석김씨',
  },
  {
    rank: '10',
    webImg: require('./image/10.jpg'),
    title: '참교육',
    grade: '★ 9.10',
    writer: '채용택 / 한가람',
  },
  {
    rank: '11',
    webImg: require('./image/11.jpg'),
    title: '외모지상주의',
    grade: '★ 9.11',
    writer: '박태준',
  },
  {
    rank: '12',
    webImg: require('./image/12.jpg'),
    title: '프리드로우',
    grade: '★ 9.12',
    writer: '전선욱',
  },
  {
    rank: '13',
    webImg: require('./image/13.jpg'),
    title: '뷰티풀 군바리',
    grade: '★ 9.13',
    writer: '설이 / 윤성원',
  },
  {
    rank: '14',
    webImg: require('./image/14.jpg'),
    title: '여신강림',
    grade: '★ 9.14',
    writer: '야옹이',
  },
  {
    rank: '15',
    webImg: require('./image/15.jpg'),
    title: '싸움독학',
    grade: '★ 9.15',
    writer: '박태준 / 김정현',
  },
];

const App = () => {
  const renderItem = ({item}) => (
    <View>
      <Image source={item.webImg} style={{width: 140, height: 140}}></Image>
      <Text style={styles.Title}>{item.title}</Text>
      <Text style={styles.Grade}>{item.grade}</Text>
      <Text style={styles.Writer}>{item.writer}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.rank}
        data={Data1}
        renderItem={renderItem}
        numColumns={3}
        ListHeaderComponent={
          <View>
            <Banner></Banner>
          </View>
        }></FlatList>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Title: {
    fontSize: 15,
    color: 'black',
    marginLeft: 8,
  },
  Grade: {
    fontSize: 12,
    color: 'red',
    marginLeft: 8,
  },
  Writer: {
    fontSize: 12,
    color: 'gray',
    marginLeft: 8,
  },
  wrapper: {height: 200},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
