require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');

app.use('/', express.static(path.join(__dirname, 'client/build'))); // Set build folder

app.use(express.json()); // access req.body

const holdingsRoutes = require('./server-routes/holdingsRoutes');
app.use('/api/holdings/', holdingsRoutes);

const portfolioRoutes = require('./server-routes/portfolioRoutes');
app.use('/api/portfolio/', portfolioRoutes);

const authRoutes = require('./server-routes/authRoutes');
app.use('/api/auth/', authRoutes);

const apiRoutes = require('./server-routes/apiRoutes');
app.use('/api/stocks/', apiRoutes);

// Catch all
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Running on port: ${PORT}`));
