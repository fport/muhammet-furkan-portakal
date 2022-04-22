// connect WeatherStack api
const axios = require('axios')

const getWeatherStack = async (url) => {
    try {
        return await axios.get(url).then((req, res) => {
            return req.data.current
        }).catch(error => console.log('Error Handler running, this error =>', error))
    } catch (error) {
        console.log('Error Handler running, this error =>', error)
    }
}

const weather = (city, callback) => {
    const accessKey = process.env.ACCESS_KEY;
    const url = `http://api.weatherstack.com/current?access_key=${accessKey}&query=${city}`

    getWeatherStack(url).then(res => {
        if(res) {
            const mappingData = {
                "temperature" : res.temperature,
                "pressure": res.pressure,
                "humidity": res.humidity                 
            }
           return callback(undefined, mappingData) 
        } else {
            return callback('Error Handler running', undefined)
        }
    }).catch( error =>  console.log('Error Handler running, this error =>', error))
}

module.exports = weather