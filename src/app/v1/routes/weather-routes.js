/* CR_NOTICE_BEGIN */
/* IBM Confidential - OCO Source Materials */
/*
Licensed Materials - Property of IBM
(C) Copyright IBM Corp. 2018. All Rights Reserved.
US Government Users Restricted Rights - Use, duplication or disclosure
restricted by GSA ADP Schedule Contract with IBM Corp.
*/
/* The source code for this program is not published or otherwise divested of its trade secrets, */
/* irrespective of what has been deposited with the U.S. Copyright Office. */
/* CR_NOTICE_END */

var express = require('express');
var router = express.Router();
var weatherApi = require('../api/weather-api');


//router.use('/weather',utils.RouteValidations); --> Any commonn validation over routes can be implemented here!!

router.get('/weather/forecast', weatherApi.getForcastByID);


module.exports = router;