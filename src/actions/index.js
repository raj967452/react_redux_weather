//const API_KEY = '846a0268815f7b5b6589e6ce9e70e41d';
const API_KEY = '7d9be76ca8eff25bdc44ae9b82f48e7b';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`;



export const FETCH_WEATHER = 'FETCH_WEATHER';
const rp = require('request-promise');

export function fetchWeatherInfo(city, country){
    //const url = `${ROOT_URL}&q=${city},us`;
    
    return function (dispatch) {
        var options = {
            uri: `${ROOT_URL}&q=${city},${country}}`,
            headers: {
                'User-Agent': 'Request-Promise'
            },
            json: true // Automatically parses the JSON string in the response
        };
      
      rp(options)
          .then(response => dispatch(setCity(response)))
          .catch(function (err) {
              // API call failed...
              console.log(err);
          });
      }

};


  export function setCity(response){
    return {
      type: FETCH_WEATHER,
      payload: response
    }
  }