// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // Parse JSON requests
app.use(express.static('public')); // Serve static files (HTML, CSS, JS)

// Basic route
app.get('/', (req, res) => {
  res.send('Balathon is running!');
});

// Example API endpoint
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

