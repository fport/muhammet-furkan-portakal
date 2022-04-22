// connect Mapbox api
const axios = require('axios')

const getGeocode = async (url) => {
    try {
        return await axios.get(url).then((req, res) => {
            return req.data
        }).catch(error => console.log('Error Handler running, this error =>', error))
    } catch (error) {
        console.log('Error Handler running, this error =>', error)
    }
}

const geocode = (city, callback) => {
    console.log('city',city);
    return callback(undefined, 'osman')
}

module.exports = geocode