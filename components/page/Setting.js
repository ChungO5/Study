import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Setting = () => {
  return (
    <View style={sytles.container}>
      <Text style={sytles.font}>Setting</Text>
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

export default Setting;
