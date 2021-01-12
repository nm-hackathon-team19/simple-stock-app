const express = require('express')
const app = express();
const path = require('path');

// Set my buildb  as a static folder.
// We just need to put the files in buils and it'll work
app.use('/', express.static(path.join(__dirname, 'client/build')));

app.use(express.json()) // to get data from the client side we need to use req.body and this allows us to access the req.body and get json data.

// DB ROUTES \\

const tradeRoutes = require('./routes/tradeRoutes');
app.use('/trade/', tradeRoutes);

const portfolioRoutes = require('./routes/portfolioRoutes');
app.use('/portfolio/', portfolioRoutes);

const authRoutes = require('./routes/authRoutes');
app.use('/auth/', authRoutes);

const stocksRoutes = require('./routes/stocksRoutes');
app.use('/api/', stocksRoutes);

// Catch all
app.get("/*", (req, res) => { res.sendFile(path.join(__dirname, "client", "build", "index.html")); });

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Running on port: ${port}`));