import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import GetLocation from '@react-native-community/geolocation';

const Main: () => Node = () => {
  GetLocation.setRNConfiguration({
    enableHighAccuracy: true,
    timeout: 15000,
  });
  GetLocation.getCurrentPosition(
    data => {
      console.log(data);
    },
    error => console.log(error),
  );

  return (
    <SafeAreaView>
      <View>
        <Text>Hello</Text>
      </View>
    </SafeAreaView>
  );
};
export default Main;
