const express = require('express');
const HTTP_Server = express();

const router = require('./router')

HTTP_Server.use(express.json());

//Connection of router
HTTP_Server.use('router')


HTTP_Server.listen(3000, (error) => {
    if (error) {
        console.error(`Error starting server: ${error.message}`);
        process.exit(1);
    }
    console.log('Server is running on port 3000');
})


