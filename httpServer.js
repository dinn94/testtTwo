// Create a web server with Node built-in HTTP and HTTPS module
const http = require('http');
const httpPort = 3001;
const httpServer = http.createServer();


httpServer.on('request', (request, response) => {
    console.log(`URL: ${request.url}`);
    response.end('Hello, http web server by din');
});


// Start the http web server
httpServer.listen(httpPort, (error) => {
    if (error) return console.log(`Error: ${error}`);

    console.log(`Http web server is listening on port ${httpPort}`)
})


