//creating constants for the api username and password
const apiUser= 'durhamcollege_mujtaba';
const apiPassword= 'O047gx4HdK';
//conntecting the api
const endpointUrl = 'https://api.meteomatics.com';

//creating an entry field for city 
const cityName=prompt("Please enter which city you would like to retrieve data for: ");
const time='2023-05-03T00:00:00ZP1D:PT1H'

const queryParameters= {

    parameters: 't_2m:C,relative_humidity_2m:p,wind_speed_100m:kmh',
    place: cityName
}
const urlParams = new URLSearchParams(Object.entries(queryParameters));

fetch(endpointUrl, {
    headers: {
      Authorization: `Basic ${btoa(`${apiUser}:${apiPassword}`)}`
    },
    method: 'GET',
    body: null
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));