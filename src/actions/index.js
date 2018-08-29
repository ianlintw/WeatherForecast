import axios from 'axios';

const API_KEY = '644570e8f6fe4313599437e937dd75cd';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,//use a variable so that typo will be caught by the JS interpreter
        payload: request
    };
}