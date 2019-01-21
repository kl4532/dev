var express = require('express');
var mysql = require('mysql');
var bodyParser =require('body-parser');
var exphb = require('express-handlebars');
var nodemailer = require('nodemailer');

var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false })

//Create connection
const db = mysql.createConnection({
   host     : 'localhost',
   user     : 'root',
   password : '',
   database: 'People'
});

//connection
db.connect((err) =>{
  if(err) {throw err};
  console.log('MySql Connected...');
});

app.set('view engine', 'ejs');
app.use('/assets', express.static('stuff')); // tell app where are static files like css, front end stuff, etc

app.get('/', function(req, res){
  res.render('index');
});
app.get('/workers', (req, res) =>{
  let sql = 'SELECT * FROM workers';
  let query = db.query(sql, (err, data) =>{
    if(err) throw err;
    console.log(`Workers loaded succesfully`);
    console.log(data);
    res.render('workers', {data: data});
  });
});
app.get('/addworker', function(req,res){
  res.render('addworker', {qs: req.query});
});
app.get('/worker/:id', (req, res) =>{
  let personID = req.params.id;
  let sql = `SELECT * FROM workers WHERE ID=${personID}`;
  let query = db.query(sql, (err, data) =>{
    if(err){res.render(`404`);}else {
      console.log(personID + ' loaded');
      if(data[0]==undefined){
        res.render('404');
      }else res.render(`worker`, {data: data[0], id: personID} )};
  });
});
app.post('/addworker', urlencodedParser, function(req,res){ //data from form
  //vlidacja
  let data = req.body; // getting data from form
  let worker = {surname: data.who, department: data.department, email: data.email};
  let sql = 'INSERT INTO workers SET ?';
  let query = db.query(sql, worker, (err, result) =>{
    if(err) throw err;
    console.log(`Worker ${data.who} added succesfully`);
    res.render('add-succes', {data: req.body});
  });
});
app.get('/worker/delworker/:id', function(req,res){ //data from form
  let personID = req.params.id;
  let sql = "";
  if(!isNaN(personID)){
    console.log("type: "+ typeof(personID));
     sql = `DELETE FROM workers WHERE ID = ${personID}`;
  }else sql = `DELETE FROM workers WHERE ID = 0`;
  let query = db.query(sql, (err, result) =>{
    if(err) throw err;
    console.log(result);
    console.log("type: "+ typeof(personID));
    if(result.affectedRows)
      {
        console.log(`Worker with id=${personID} deleted succesfully`);
        res.render(`del-succes`, {id: personID} );
      }else res.render(`del-failed`, {id: personID} );
  });
});

app.post('/worker/:id/send', urlencodedParser, function (req, res) {
  let mailOpts, smtpTrans;
  let data = req.body;
  // console.log('data ' + data.mssg);
  smtpTrans = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: "cornytesto@gmail.com", // default mail for site
      pass: "kaban777"
    }
  });
  mailOpts = {
    from: "Corny, <cornytesto@gmail.com>",
    to: data.email, //receiver
    subject: data.subject,
    text: data.mssg
  };
  smtpTrans.sendMail(mailOpts, function (error, response) {
    if (error) {
      res.render('404'); //res.render('contact-failure');
    }
    else {
      res.render('send-succes', {data: data});
    }
  });
});

app.listen(3000);
