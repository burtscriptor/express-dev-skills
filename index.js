//var indexRouter = require('./routes/index');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var methodOverride = require('method-override');

var indexRouter = require('./routes/index')
var skillsRouter = require('./routes/skills');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(methodOverride('_method'));

app.use('/', indexRouter);
app.use('/skills', skillsRouter);

app.get('/', (request, resend) => {
    resend.render('index');                 // if some tries to get the home page we respond with home.ejs, looks in views folder

});

app.listen(3000, () => {
    console.log('server running on http://localhost:3000/')
});