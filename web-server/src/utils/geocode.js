// connect Mapbox api
const axios = require('axios')

const getGeocode = async (url) => {
    try {
        return await axios.get(url).then((req, res) => {
            return req.data.features[0].center
        }).catch(error => console.log('Error Handler running, this error =>', error))
    } catch (error) {
        console.log('Error Handler running, this error =>', error)
    }
}

const geocode = (address, callback) => {
    const accessKey = process.env.API_KEY;
    const url = `http://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${accessKey}`

    getGeocode(url).then(res => {
        if(res) {
            const info = {
                "enlem": res[0],
                "boylam": res[1]
            }
           return callback(undefined, info) 
        } else {
            return callback('Error Handler running', undefined)
        }
    }).catch( error =>  console.log('Error Handler running, this error =>', error))
}

module.exports = geocode