import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const FinishWebtoon = () => {
  return (
    <View style={sytles.container}>
      <Text style={sytles.font}>추천 완결</Text>
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

export default FinishWebtoon;
