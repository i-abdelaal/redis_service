// Import modules
const express = require('express');

// Init app
const app = express();

// Init middlewares
require('./startup')(app);

// Set port
const port = process.env.PORT || 3000;

// Launch server
app.listen(port, () => {
  console.log(`Server launched on port ${port}`);
});
