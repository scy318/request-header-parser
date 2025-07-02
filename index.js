const express = require('express');
const app = express();
const PORT = 3000;

app.get('/api/whoami', (req, res) => {
  const ipaddress = req.ip;
  const language = req.headers['accept-language'];
  const software = req.headers['user-agent'];
  
  res.json({ ipaddress, language, software });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));