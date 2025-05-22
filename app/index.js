const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.send('Bienvenue sur notre application Node.js déployée sur Kubernetes!');
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Application démarrée sur le port ${port}`);
}); 