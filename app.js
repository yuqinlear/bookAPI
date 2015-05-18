/**
 * Created by paul on 5/10/15.
 */
var express = require('express'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/test');
var Book = require('./models/bookModel');
var app = express();
var port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var bookRouter = require('./routes/bookRoutes')(Book);

app.use('/api/books', bookRouter);
//app.use('/api/author', authorRouter);

app.get('/', function (req, res) {
  res.send('welcome to book API!');
});

app.listen(port, function () {
  console.log(' Gulp is running my app on PORT: ' + port);
});