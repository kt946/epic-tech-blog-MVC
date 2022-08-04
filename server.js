const express = require('express');
const routes = require('./controllers/');
const sequelize = require('./config/connection');
// require express-handlebars
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// set up handlebars.js as template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);

// sync sequelize models to the database, then turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on port ${PORT}!`));
});