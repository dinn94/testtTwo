// Require packages and set the port
const { response } = require('express');
const express = require('express');
const port = 3004;
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/appRoutes')


// Use Node.js body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))


routes(app);


// Start the web server
const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);

    console.log(`Server listening on port ${server.address().port}`);
})