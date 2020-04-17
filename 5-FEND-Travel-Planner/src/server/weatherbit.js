/* istanbul ignore file */
// Functions to handle Dark Sky API requests
const fetch = require('node-fetch');

const weatherbitUrl = 'https://api.weatherbit.io/v2.0/forecast/daily/';

const weatherQueryUrl = (lat, lgt, tdate, key) =>
      `${weatherbitUrl}${key}/${lat},${lgt},${tdate}` +
      '?exclude=currently,hourly,minutely,flags';

const queryWeather = async (request, weatherbitKey) => {
    const latitude = request.latitude;
    const longitude = request.longitude;
    const placeName = request.placeName;
    // JS returns date in ms, but dark sky needs it in seconds.
    const date = request.date/1000;

    // Dark Sky query
    const weatherResponse =
	  await fetch(weatherQueryUrl(
	      latitude, longitude, date, weatherbitKey))
	  .then(res => res.json())
	  .catch(err => {
	      console.log('Error in getting weather Data: ', err);
	  });

    return weatherResponse.daily.data[0];
};

module.exports = { queryWeather, weatherQueryUrl, weatherbitUrl };
