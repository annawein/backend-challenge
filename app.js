require('dotenv').config();
const express = require('express');
const Cors = require('cors');
const app = express();
const routes = require('./routes')


app.use(Cors())

app.use(express.json())
app.use(express.urlencoded())
app.use(routes)


//Handle errors
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({ error: err });
});

app.listen(process.env.PORT || 8000, () => {
    console.log('Server started')
});