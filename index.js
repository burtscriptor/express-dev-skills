//var indexRouter = require('./routes/index');
var express = require('express');
var app = express();
var skillsRouter = require('./routes/skills');
var methodOverride = require('method-override');
//var indexRouter = require('./routes/index')

app.use(methodOverride('_method'));  // add this
//app.use('/', indexRouter);
app.use('/skills', skillsRouter);


app.set('view engine', 'ejs');

app.get('/', (request, resend) => {
    resend.render('index');                 // if some tries to get the home page we respond with home.ejs, looks in views folder

});

app.listen(3000, () => {
    console.log('server running on http://localhost:3000/')

});