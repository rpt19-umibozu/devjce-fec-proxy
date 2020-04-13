const express = require('express');
const fullPath = '/Users/jeisenmann/VSCode/FrontEndCapstone/devjce-fec-proxy/public/index.html';
const path = require('path');

let app = express();

app.use(express.static('public'));
app.use(express.text());
app.use(express.urlencoded());

app.get('/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', '/index.html'));
});

app.listen(3000, () => {
  console.log('Express server for Proxy AirBnb listening on port 3000');
});
