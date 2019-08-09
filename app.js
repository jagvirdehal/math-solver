// Modules to run html server
const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// Extract and parse data from webpage
const bodyParser = require('body-parser');

// Express module setup
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get('/',function(req,res) {
    res.render('index', {title: 'Express'});
});

app.listen(port);