var express = require('express');

var app = express();

var port = process.env.PORT || 80;
app.use(express.static('public'));
app.set('views','./src/views');

var handlebars = require('express-handlebars');
app.engine('.hbs', handlebars({extname: '.hbs'}));

app.set('view engine', 'hbs');

app.get('/',function(request, response){
    response.render('index', {
        title: 'Hello World',
        list: ['Pizza', 'Cake', 'Bread']
    });
});

app.get('/hot',function(request, response){
    response.send('hello world, damn its hot');
});

app.listen(port, function(err) {
    console.log('Running on port ' + port);
});