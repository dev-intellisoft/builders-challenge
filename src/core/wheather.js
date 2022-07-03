import axios from 'axios';

export const getLocalWeather = async address => {
  try {
    const {data} = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${address.position.lat}&lon=${address.position.lng}&appid=7815bdf6dd329b0787f240a5a45dc4d2&units=metric`,
    );
    return {...data, description: data.weather[0].description};
  } catch (e) {
    return e;
  }
};
