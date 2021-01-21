const express = require('express');
const path = require('path');
const morgan = require('morgan');
require('dotenv').config();
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 5055);
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'));

app.use('/', require('./routes/routes'));

app.listen(app.get('port'), () => {
    console.log(`Listening on port ${app.get('port')}.`);
});