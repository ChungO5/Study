import React from 'react';
import {Text, View, FlatList, Image, StyleSheet} from 'react-native';
import Banner from './Banner';
import Data from '../Data.json';

const Data1 = Data.Data;

const renderItem = ({item}) => (
  <View>
    <Image
      source={{uri: item.webImg}}
      style={{width: 140, height: 140}}></Image>
    <Text style={styles.Title}>{item.title}</Text>
    <Text style={styles.Grade}>{item.grade}</Text>
    <Text style={styles.Writer}>{item.writer}</Text>
  </View>
);

const Webtoon = () => {
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
});

export default Webtoon;
