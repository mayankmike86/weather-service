const {
    promisify
} = require("util");
var awaitRequest = require("request-promise");


//httpGet method to handle al the GET requests here...
let httpGet = async function (url, headers) {
    try {
        var options = {
            method: 'GET',
            url: url,
            headers: headers,
            json: true
        };
        console.log("uyrl:", url)
        return await awaitRequest(options);
    } catch (err) {
        console.log("error found in restUtils httpGET: ", err);
        return Promise.reject(err);
    }
}

module.exports = {
    httpGet: httpGet
};
