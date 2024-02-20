//var indexRouter = require('./routes/index');
var express = require('express');
var appSkills = express();
var skillsRouter = require('./routes/skills');

appSkills.use('/', indexRouter);
appSkills.use('/skills', skillsRouter);

server.set('view engine', 'ejs');

server.get('/', (request, resend) => {
    resend.render('index');                 // if some tries to get the home page we respond with home.ejs, looks in views folder

});

server.listen(3000, () => {
    console.log('server running on http://localhost:3000/')

});