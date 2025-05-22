const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.send('Bienvenue sur notre application Node.js déployée sur Kubernetes!');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Application démarrée sur le port ${port}`);
}); 