var express = require('express');
var bodyParser = require('body-parser')

var app = express();

const RootRouter = require('./app/routers/product_router');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// app.use(express.static('assets'))

app.use('/', new RootRouter().getRouter());

var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})