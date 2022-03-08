
const express = require('express');
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT} ...`);
});

app.get('/',  (req, res) => {
  res.send('Welcome to the BA backend');
}); // GET /
