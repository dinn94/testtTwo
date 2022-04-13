// Create a web server with Node built-in HTTP and HTTPS module
const https = require('https');
const httpsPort = 3007;
const httpsServer = https.createServer();


httpsServer.on('request', (request, response) => {
    console.log(`URL: ${request.url}`);
    response.end('Hello, https web server by din');
});


// Start the https web server
httpsServer.listen(httpsPort, (error) => {
    if (error) return console.log(`Error: ${error}`);

    console.log(`Https web server is listening on port ${httpsPort}`)
})