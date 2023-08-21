const express = require('express');
const app = express();

const PortfolioData = require('./data');

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', '*');
    next();
  });

app.get('/portfolio', (req, res) => {
  const portfolioData = PortfolioData();
  res.json(portfolioData);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
