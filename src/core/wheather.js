import axios from 'axios';

export const getLocalWeather = async address => {
  try {
    const {data} = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=25.11320828013094&appid=7815bdf6dd329b0787f240a5a45dc4d2&lon=55.387686841627975&units=metric`,
    );
    console.log(JSON.stringify(data, null, 2));
    return data;
  } catch (e) {
    return e;
  }
};
