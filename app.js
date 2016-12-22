var express = require("express");

var app = express();

var port = 3000;
app.use(express.static('public'));
app.get('/',function(request, response){
    response.send('hello world');
});

app.listen(port, function(err) {
    console.log('Running on port ' + port);
});