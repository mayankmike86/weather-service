var config = require('../../../config/config');
var restUtils = require('../utils/rest-utils');

// getForcastByCity function talks to restUtils to get the response for given URL...
let getForcastByCity = async function (city) {
    try {
        url = config.publicAPIBaseURL
        url = url + "?q=" + city + "&appid=" + config.appID
        var headers = {}
        return await restUtils.httpGet(url, headers)
    } catch (error) {
        return Promise.reject(error);
    }
}

// getForcastByID function gets the result and sorts the records for given order and returns
let getForcastByID = async function (city, sortOrder) {
    console.log("inside getForcastByID...", city, sortOrder)
    try {
        console.log("inside getForcastByID...", city, sortOrder)
        var result = await getForcastByCity(city)
        if (sortOrder === "desc") {
            result.list.sort((a, b) => (b.dt) - (a.dt));
        } else {
            result.list.sort((a, b) => (a.dt) - (b.dt));
        }
        return result
    } catch (error) {
        console.log("error in seervie:", error)
        return Promise.reject(error);
    }
}

module.exports = {
    getForcastByID: getForcastByID
}