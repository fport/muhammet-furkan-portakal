// connect WeatherStack api
const axios = require('axios')

const getWeatherStack = async (url) => {
    try {
        return await axios.get(url).then((req, res) => {
            return req.data
        }).catch(error => console.log('Error Handler running, this error =>', error))
    } catch (error) {
        console.log('Error Handler running, this error =>', error)
    }
}

const weather = (city, callback) => {
    console.log('city',city);
    callback(undefined, 'osman')
}

module.exports = weather