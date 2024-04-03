const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');

YAML = require('yamljs');
swaggerDocument = YAML.load('./swagger.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));