const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/status', (req, res) => {
  res.json({ status: 'API is running' });
});

app.get('/version', (req, res) => {
  res.json({ version: '1.0.1' });
});

if (require.main === module) {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  }

module.exports = app;