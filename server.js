const express = require('express');
const app1 = express();
const app2 = express();

const port1 = 3000;
const port2 = 4000;

const getIpAddress = (req) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  return ip.includes('::ffff:') ? ip.split('::ffff:')[1] : ip;
};

const htmlContent = (port, ip) => `
  <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #f0f0f0;
          margin: 0;
        }
        .container {
          text-align: center;
        }
        h1 {
          color: #333;
        }
        p {
          color: #666;
        }
        button {
          background-color: #4CAF50; /* Green */
          border: none;
          color: white;
          padding: 15px 32px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
          margin: 4px 2px;
          cursor: pointer;
          border-radius: 12px;
          transition-duration: 0.4s;
        }
        button:hover {
          background-color: white; 
          color: black; 
          border: 2px solid #4CAF50;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Hello World from port ${port}</h1>
        <p>Your IP Address: ${ip}</p>
        <button onclick="window.location.href='https://github.com/TopSkibidi/APITESTAPP'">Go to GitHub</button>
      </div>
    </body>
  </html>
`;

app1.get('/', (req, res) => {
  const ip = getIpAddress(req);
  res.send(htmlContent(port1, ip));
});

app2.get('/', (req, res) => {
  const ip = getIpAddress(req);
  res.send(htmlContent(port2, ip));
});

app1.listen(port1, () => {
  console.log(`Server is running at http://localhost:${port1}`);
});

app2.listen(port2, () => {
  console.log(`Server is running at http://localhost:${port2}`);
});
