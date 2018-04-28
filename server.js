var express =require( 'express');
var morgan =require( 'morgan');
var bodyParser =require( 'body-parser');
var request =require( 'request');
var router = express.Router();
var ReactEngine = require('express-react-engine');
const app = express();
const port = process.env.PORT || 8080;

// Log with Morgan
app.use(morgan('dev'));
 
// Accept encoded data as well as json format
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 
// Static files
app.use(express.static(__dirname + '/dist'));

 app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(router);
require('./routes/admin/testtxn')(app);
require('./routes/admin/pgredirect')(app);
require('./routes/admin/response')(app);
app.set('views', __dirname + '/src/paytm/components');
app.engine('jsx', ReactEngine());
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

 app.get('*',function(req,res){
     res.sendFile(__dirname+'/dist/index.html');
 });

app.listen(port);
console.log(`listening on port ${port}`);