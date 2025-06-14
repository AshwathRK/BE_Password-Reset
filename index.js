const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const cookieParser = require('cookie-parser');

require('./db'); // DB connection
const router = require('./Router/router');

const HTTP_Server = express();

// ✅ Parse JSON and URL-encoded data
HTTP_Server.use(express.json());
HTTP_Server.use(express.urlencoded({ extended: false }));

// ✅ Parse cookies
HTTP_Server.use(cookieParser());

// ✅ Enable CORS for frontend
HTTP_Server.use(cors({
  origin: 'https://userpasswordreset.netlify.app', // Your frontend
  credentials: true
}));

// ✅ Serve static files if needed
HTTP_Server.use(express.static('public'));

// ✅ Swagger documentation setup
const swaggerDocument = YAML.load('./docs/swagger.yaml');
HTTP_Server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// ✅ Connect your API routes
HTTP_Server.use('/api', router);

// ✅ Start server
HTTP_Server.listen(3000, (error) => {
  if (error) {
    console.error(`Error starting server: ${error.message}`);
    process.exit(1);
  }
  console.log('✅ Server is running on port 3000');
});
