import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MyPage = () => {
  return (
    <View style={sytles.container}>
      <Text style={sytles.font}>MY</Text>
    </View>
  );
};

const sytles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  font: {
    fontSize: 30,
  },
});

export default MyPage;
