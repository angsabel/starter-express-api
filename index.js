const express = require('express');
const app = express();

const PortfolioData = require('./data');

// Middleware to handle CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', '*');
    next();
  });

// Define a route to get portfolio data
app.get('/portfolio', (req, res) => {
  const portfolioData = PortfolioData();
  res.json(portfolioData);
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
