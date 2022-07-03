import React, {useEffect, useState} from 'react';
import type {Node} from 'react';
import {getAddress, getLocation} from '../core/geo';
import {getLocalWeather} from '../core/wheather';
import {Box, Container, Text, Button} from './styles';
import If from '../components/if';

const Main: () => Node = () => {
  const [data, setData] = useState({
    loading: true,
  });
  const init = () => {
    setData({loading: true});
    getLocation()
      .then(async location => {
        const [address] = await getAddress(location);
        const weather = await getLocalWeather(address);
        console.log(weather);
        setData({...address, ...weather});
      })
      .catch(err => console.log(err));
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <Container>
      <If exp={data.loading}>
        <Box>
          <Text>Loading...</Text>
        </Box>
        <>
          <Box>
            <Text>
              {data.locality}, {data.countryCode}
            </Text>
            <Text>{parseInt(data.main?.temp, 10)}°</Text>
            <Text>Feel like: {parseInt(data.main?.feels_like, 10)}°</Text>
            <Text>{data?.description}</Text>
            <Text>
              H:{parseInt(data.main?.temp_max, 10)}° L:
              {parseInt(data.main?.temp_min, 10)}°
            </Text>
          </Box>
          <Box>
            <Text>
              Street: {data?.streetName} {data?.streetNumber}
            </Text>
            <Text>Neighborhood: {data?.subLocality}</Text>
            <Text>
              {data?.locality}, {data?.country}
            </Text>
            <Text>
              Long:{data?.position?.lng}; Lat:{data?.position?.lat}
            </Text>
          </Box>
          <Button onPress={() => init()}>
            <Text>Reload</Text>
          </Button>
        </>
      </If>
    </Container>
  );
};
export default Main;
