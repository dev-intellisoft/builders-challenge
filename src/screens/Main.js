import React, {useEffect, useState} from 'react';
import type {Node} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {getAddress, getLocation} from '../core/geo';
import {getLocalWeather} from '../core/wheather';

const Main: () => Node = () => {
  // const [location, setLocation] = useState({});
  const init = () => {
    getLocation()
      .then(async location => {
        const [address] = await getAddress(location);
        const data = await getLocalWeather(address);
        // console.log(data);
      })
      .catch(err => console.log(err));
  };
  useEffect(() => {
    // init();
  }, []);
  return (
    <SafeAreaView>
      <View>
        <Text>Hello</Text>
      </View>
    </SafeAreaView>
  );
};
export default Main;
