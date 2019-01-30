const express = require('express');
const path = require('path');
var mysql = require('mysql');
var bodyParser =require('body-parser');
// Init App
const app = express();
//middleware
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//set static folder
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use('/assets', express.static('public'));
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
app.post('/articles/add', urlencodedParser, (req, res)=>{
  let data = req.body; // getting data from form
  let article = {title: data.title, author: data.author, body: data.body};
  let sql = 'INSERT INTO articles SET ?';
  let query = db.query(sql, article, (err, result) =>{
    if(err) throw err;
    console.log(`article added succesfully`);
    res.redirect('/');
  });
});
app.listen(3000, ()=>{
  console.log("server is running on port 3000");
});
