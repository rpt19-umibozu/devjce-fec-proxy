const express = require('express');
const path = require('path');

let app = express();

app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Express server for Proxy AirBnb listening on port 3000');
});
