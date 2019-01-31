const express = require('express');
const path = require('path');
var mysql = require('mysql');
var bodyParser =require('body-parser');
const expressValidator = require('express-validator');
const flash = require('connect-flash');
const session = require('express-session');
// Init App
const app = express();
//middleware
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//set static folder
app.use(express.static(path.join(__dirname, 'node_modules'))); // bootstrap and jq
app.use(express.static(path.join(__dirname, 'public'))); // front end static
//express session middleware
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false } // co to kurwa jest??!?
}));
// app.use(session({
//   secret: 'keyboard cat',
//   cookie: { maxAge: 60000 }
// }));
//express messages middleware
app.use(flash());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});
//express validator middleware
app.use(expressValidator());﻿


const db = mysql.createConnection({
   host     : 'localhost',
   user     : 'root',
   password : '',
   database: 'db_Articles'
});

//connection to db
db.connect((err) =>{
  if(err) {throw err};
  console.log('MySql Connected...');
});

// Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//test flash
app.get("/testflash", (req, res)=>{
  req.flash('msg1', 'Flash mesage');
  res.send('hello corny!');
});
app.get("/sikandar", (req, res)=>{
  res.send(req.flash('msg1'));
});
// Home Route
app.get('/', (req, res) => {
  let sql = 'SELECT * FROM articles';
  let query = db.query(sql, (err, data) =>{
    if(err) throw err;
    console.log(`Articles loaded succesfully`);
    console.log(data);
    res.render('index', {
      title: 'Articles', articles: data
    });
  });
});
app.get('/article/:id', (req, res)=>{
  let sql = `SELECT * FROM articles WHERE id=${req.params.id}`;
  let query = db.query(sql, (err, data) =>{
    if(err) throw err;
    console.log(data);
    res.render('article', {
    article: data[0]
    });
  });
});
app.get('/articles/add', (req, res)=>{
  res.render('add_article', {
    title: 'Add Article'
  });
});
app.get('/article/edit/:id', (req, res)=>{
  let sql = `SELECT * FROM articles WHERE id=${req.params.id}`;
  let query = db.query(sql, (err, data) =>{
    if(err) throw err;
    console.log(data);
    res.render('edit_article', {
    title: 'Edit article',
    article: data[0]
    });
  });
});
//update submit
app.post('/articles/add', urlencodedParser, (req, res)=>{
  let data = req.body; // getting data from form
  let article = {title: data.title, author: data.author, body: data.body};
  let sql = 'INSERT INTO articles SET ?';
  let query = db.query(sql, article, (err, result) =>{
    if(err) throw err;
    console.log(`article added succesfully`);
    req.flash('success', 'Article added');
    res.redirect('/');
  });
});
app.post('/articles/edit/:id', urlencodedParser, (req, res)=>{
  let data = req.body; // getting data from form
  let article = {title: data.title, author: data.author, body: data.body};
  let sql = `UPDATE articles SET ? WHERE id=${req.params.id}`;
  let query = db.query(sql, article, (err, result) =>{
    if(err) throw err;
    console.log(`article edited succesfully`);
    res.redirect('/');
  });
});
app.delete('/article/:id', (req,res)=>{
  let sql = `DELETE FROM articles WHERE id=${req.params.id}`;
  let query = db.query(sql, (err, data) =>{
    if(err) throw err;
    res.send('Succes');
  });
});
app.listen(3000, ()=>{
  console.log("server is running on port 3000");
});
