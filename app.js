var express = require('express');

var app = express();

var port = process.env.PORT || 3000;
app.use(express.static('public'));
app.set('views','./src/views');
app.set('view engine', '');

app.get('/',function(request, response){
    response.send('hello world');
});

app.get('/hot',function(request, response){
    response.send('hello world, damn its hot');
});

app.listen(port, function(err) {
    console.log('Running on port ' + port);
});