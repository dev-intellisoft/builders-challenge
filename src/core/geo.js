import GetLocation from '@react-native-community/geolocation';
import Geocoder from '@timwangdev/react-native-geocoder';

GetLocation.setRNConfiguration({
  enableHighAccuracy: true,
  timeout: 15000,
});

export const getLocation = async () => {
  return new Promise((resolve, reject) => {
    GetLocation.getCurrentPosition(
      data => {
        resolve(data);
      },
      error => reject(error),
    );
  });
};

export const getAddress = async ({coords}) => {
  try {
    return await Geocoder.geocodePosition({
      lat: coords.latitude,
      lng: coords.longitude,
    });
  } catch (err) {
    return err;
  }
};
