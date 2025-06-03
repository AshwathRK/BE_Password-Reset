const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const router = require('./Router/router')
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
require('./db');
const auth = require('./Middleware/auth');

const HTTP_Server = express();

// ✅ Middleware for static files, parsing JSON/body/cookies
HTTP_Server.use(express.static('public'));
HTTP_Server.use(bodyParser.json());
HTTP_Server.use(bodyParser.urlencoded({ extended: false }));
HTTP_Server.use(cookieParser());

HTTP_Server.use(cors());

// Load YAML Swagger file
const swaggerDocument = YAML.load('./docs/swagger.yaml');

// Serve Swagger UI at /api-docs
HTTP_Server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


// ✅ Auth middleware
HTTP_Server.use(auth);

//Connection of router
HTTP_Server.use('/api', router)


HTTP_Server.listen(3000, (error) => {
    if (error) {
        console.error(`Error starting server: ${error.message}`);
        process.exit(1);
    }
    console.log('Server is running on port 3000');
})


