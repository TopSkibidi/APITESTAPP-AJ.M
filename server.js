const express = require('express');
const app1 = express();
const app2 = express();

const port1 = 3000;
const port2 = 4000;

const htmlContent = (port) => `
  <html>
    <body>
      <h1>Hello World from port ${port}</h1>
      <button onclick="window.location.href='https://github.com/TopSkibidi/APITESTAPP'">Go to GitHub</button>
    </body>
  </html>
`;

app1.get('/', (req, res) => {
  res.send(htmlContent(port1));
});

app2.get('/', (req, res) => {
  res.send(htmlContent(port2));
});

app1.listen(port1, () => {
  console.log(`Server is running at http://localhost:${port1}`);
});

app2.listen(port2, () => {
  console.log(`Server is running at http://localhost:${port2}`);
});
