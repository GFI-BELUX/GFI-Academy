var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.redirect('/static/index.html')
});

app.listen('8080');
console.log('webapp running...');