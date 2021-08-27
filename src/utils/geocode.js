const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoidHlhZ2kyMTMiLCJhIjoiY2tzaXk3cnQwMDgwMDJ3cW82eThzNDZjZyJ9.Bo8O9eUgZM2QlsfSlXmycg'

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback("unable to connect the location service", undefined)
        } else if (body.features.length === 0) {
            callback("unable to find the location, try another search",undefined)
        }
        else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0]
            })
        }
    })

}

module.exports = geocode;