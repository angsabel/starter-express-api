const express = require('express');
const cors = require('cors');
const app = express();

const PortfolioData = require('./data');

// app.use(cors());

app.get('/portfolio', (req, res) => {
  const portfolioData = PortfolioData();
  res.json(portfolioData);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
