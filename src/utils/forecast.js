const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=8d90a5eaa22f98b7c148091e655d7424&query='+latitude+','+longitude+'&units=m'

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback("unable to connect the wheather service", undefined)
        } else if (body.error) {
            callback("unable to find the location",undefined)
        }
        else {
            callback(undefined, body.current.temperature,body.current.weather_descriptions,body.location.name)
        }
    })

}

module.exports = forecast;