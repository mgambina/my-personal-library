const makeApp = require('./app');
const config = require('./config/default');
const port = config.express.port;

makeApp()
  .then(app => {
    app.listen(port)
  })
  .then(() => {
    console.log(`App running on port ${port}...`)
  })
  .catch(err => {
    console.error('Caught an error', err)
});
