const express = require('express');
const serverless = require('serverless-http');
const app = express();
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.get('/status', (req, res) => {
  res.json({ status: 'API is running' });
});

router.get('/version', (req, res) => {
  res.json({ version: '1.0.1' });
});

app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);
