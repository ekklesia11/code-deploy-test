const express = require('express');
const app = express();

app.get('/', (req, res, err) => {
  res.send('hello deploy world');
});

app.listen(5050, () => {
  console.log('server is running on 5050 ...');
});