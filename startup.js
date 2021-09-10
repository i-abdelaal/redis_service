// Import modules
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const methodOverride = require('method-override');

// Import routes
const router = require('./routes');

// Import db
const db = require('./db');

module.exports = function (app) {
  // Init db connection
  db.dbInit();

  // View engine
  app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
  app.set('view engine', 'handlebars');

  // Body-parser
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  // Method override
  app.use(methodOverride('_method'));

  // Routes
  app.use(router);
};
