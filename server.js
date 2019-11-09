const PORT = process.env.PORT || 5000
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');
var app = express();
app.use(express.static(path.join(__dirname, 'public'), {
    extensions: ['html', 'htm'],
}))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
  app.use(bodyParser.urlencoded({ extended: true }));