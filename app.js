const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerParser = require('swagger-parser')
// const { connector } = require('swagger-routes-express');
const apiRouter = require('./src/routers/apiRouter');

const makeApp = async () => {
  const parser = new swaggerParser();
  // this is the path to your OpenAPI file
  const apiDefinition = await parser.validate('./docs/openapi.yaml');
  // const connect = connector(api, apiDefinition) // make the connector
  const app = express() // make the app
  // do any other app stuff, such as wire in passport, use cors etc

  // This is the endpoint that will display the swagger docs
  app.use('/api-docs',swaggerUi.serve, swaggerUi.setup(apiDefinition));
  app.use('/api/v1', apiRouter);


  // connect(app); // attach the routes

  // add any error handlers last

  return app;
}
module.exports = makeApp;
