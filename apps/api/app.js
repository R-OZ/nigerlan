const express = require('express');
const cors = require('cors');
const path = require('node:path');
const lectureRoute = require('./routes/lecture');

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/lecture', lectureRoute);

module.exports = app;
