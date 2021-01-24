const apiUrl = 'https://api.openweathermap.org/data/2.5/';
const apiKey = 'f2796c868ee38ec9acbae3fb973f426e';

// Private functions
const callApi = (endpoint) => {
    const url = `${apiUrl}${endpoint}&appid=${apiKey}`;

    return fetch(url)
        .then((res) => {
            return res.text();
        })
        .then((data) => {
            return JSON.parse(data);
        });
};

// export const getPosts = () => callApi('posts');
export const findCityByCoordinates = (lat, lon) => callApi(`weather?lat=${lat}&lon=${lon}`);
export const findForecastById = (cityId) => callApi(`forecast?id=${cityId}`);
// export const findForecastById = (cityId) => callApi(`forecast/hourly?id=${cityId}`);
export const findSearchList = (cityName) => callApi(`find?q=${cityName}`);
// weather? - текущая погода
// forecast? - прогноз
// find?q=London&appid={API key} | '234' -> error
// https://www.w3schools.com/html/html5_geolocation.asp
// http://openweathermap.org/img/wn/01d@2x.png - урл иконок, меняется ид "01d"
// http://api.openweathermap.org/data/2.5/forecast/hourly?id=524901&lang=zh_cn&appid={API key}
