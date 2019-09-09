require('./config/config');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());



app.get('/', function(req, res) {
    res.json('Hello World');
});


app.post('/usuario', function(req, res) {

    let body = req.body;
    res.json({
        body
    });
});

app.put('/usuario', function(req, res) {
    res.json('put usuario');
});

app.get('/usuario', function(req, res) {
    res.json('get usuario');
});


app.delete('/', function(req, res) {
    res.json('delete usuario');
});


app.listen(process.env.PORT, () => {
    console.log("Escuchando puerto: ", process.env.PORT);
});