
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from public directory
app.use(express.static('public'));

// Home page route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Income Statement route
app.get('/incomestatement', (req, res) => {
    res.sendFile(path.join(__dirname, 'Incomestatement.html'));
});

// Balance Sheet route
app.get('/balancesheet', (req, res) => {
    res.sendFile(path.join(__dirname, 'Balancesheet.html'));
});

// Cash Flow route
app.get('/cashflow', (req, res) => {
    res.sendFile(path.join(__dirname, 'Cashflow.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
