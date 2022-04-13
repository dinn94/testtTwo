const users = [{
    id: 1,
    name: "Ali",
    email: "ali@yahooz.com"
},
{
    id: 2,
    name: 'Abu',
    email: 'abu@yahooz.com'
},
{
    id: 3,
    name: 'Ismail',
    email: 'ismail@yahooz.com'
}
]


const router = (app) => {
    app.get('/', (request, response) => {
        console.log(`URL: ${request.url}`);
        response.send({ message: 'Node.js and Express REST API by din' });
    });

    app.get('/users', (request, response) => {
        response.send(users);
    })
}


// Export the router
module.exports = router;