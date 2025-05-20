
if(process.env.NODE_ENV != "production") // node_env development ve product değerleri alır. hata kodunu ekranda göstermeyi engelliyor.
  require('dotenv').config() //dotenv kütüphanesini .env dosyasına yazılan parametrelerini al ve process.env a ata. 

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');



console.log ("ENV",process.env); //çevre değişkenleri çekmiş oluruz.
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req,res,next) =>{
  console.log("Ben app.js te tanımlanan bir middleware'im");
  next();
})

 app.use('/api', require('./routes/index')); // http://localhost:3000
 //bunun yerine dinamik yapacağız.
 // app.use('/', require('./routes/index')); // http://localhost:3000
  //app.use('/users', require('./routes/users')); // http://localhost:3000/users
  //app.use('/auditlogs', require('./routes/auditlogs')); // http://localhost:3000/auditlogs
  //app.use('/categories', require('./routes/categories')); // http://localhost:3000/categories
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
