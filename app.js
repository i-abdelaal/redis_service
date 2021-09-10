// Import modules
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const methodOverride = require('method-override');
const redis = require('redis');

// Set port
const port = process.env.PORT || 3000;

// Init app
const app = express();

// View engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Method override
app.use(methodOverride('_method'));

// Route
app.get('/', (req, res, next) => {
  res.render('searchusers');
});

// Launch server
app.listen(port, () => {
  console.log(`Server launched on port ${port}`);
});
