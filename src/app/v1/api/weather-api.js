var weatherService = require('../service/weather-service');

const badRequest = 400
const succesStatusCode = 200
// validateParams validates incoming query/path params
function validateParams(city, orderBy) {
    console.log("orderBy: ", orderBy)
    var errmsg = {}
    if (orderBy === "asc" || orderBy === "desc" || orderBy === undefined) {
        errmsg = {
            "message": "validation of params passed",
            "statusCode": succesStatusCode
        }
        return errmsg

    }
    console.log("orderBy: ", orderBy)
    errmsg = {
        "message": "unsupported option for sorting only asc/desc is supported",
        "statusCode": badRequest
    }
    //More Validations can be added here
    return errmsg
}

// getForcastByID function get the query parameter and calls service layer getForcastByID().
let getForcastByID = async function (req, res) {

    try {
        const city = req.query.city;
        const orderBy = req.query.orderBy;
        errmsg = validateParams(city, orderBy)
        if (errmsg.statusCode > succesStatusCode) {
            return res.status(400).send(errmsg);
        }
        console.log("inside getForcastByID...", city, orderBy)
        let result = await weatherService.getForcastByID(city, orderBy)
        return res.status(200).send(result);
    } catch (error) {
        console.log("error:", error)
        return res.status(error.statusCode).send(JSON.stringify(error.error));
    }
}

module.exports = {
    getForcastByID: getForcastByID
}