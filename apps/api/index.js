const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.static('public'))

const PORT = process.env.PORT || 4000


const lectureRoute = require('./routes/lecture.js');
app.use('/lecture', lectureRoute)


app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));

