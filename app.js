

var express = require('express');

var app = express();
const port = 8000;
var vault = null;
const baseUrl = '/weather-forecast-service/api/v1.0';

var weatherRoutes = require('./src/app/v1/routes/weather-routes');


app.use(baseUrl, weatherRoutes);
app.listen(port, () => {  
    console.log('Weather Service is live on ' + port);
});

