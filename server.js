const express = require('express');
const app1 = express();
const app2 = express();

const port1 = 3000;
const port2 = 4000;

app1.get('/', (req, res) => {
  res.send('Hello from port 3000');
});

app2.get('/', (req, res) => {
  res.send('Hello from port 4000');
});

app1.listen(port1, () => {
  console.log(`Server is running at http://localhost:${port1}`);
});

app2.listen(port2, () => {
  console.log(`Server is running at http://localhost:${port2}`);
});
