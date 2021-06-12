

var express = require('express');

var app = express();
const port = 8000;
var vault = null;
const baseUrl = '/weather-forecast-service/api/v1.0';

var accountRoutes = require('./src/app/v1/routes/weather-routes');


app.use(baseUrl, accountRoutes);
app.listen(port, () => {  
    console.log('Cloud Brokerage Credential Service is live on ' + port);
});
