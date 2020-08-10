const express = require('express');
const path = require('path');
const ejs = require('ejs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const BlogPost = require('./models/BlogPost');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect('mongodb://localhost/my_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const port = 3001;
app.listen(port, _ => {
  console.log(`App listening on port ${port}`);
});

app.get('/', (req, res) => {
  console.log('reques', req.route.path);
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/post', (req, res) => {
  res.render('post');
});

app.get('/posts/new', (req, res) => {
  res.render('create')
});

app.post('/posts/store', async (req, res) => {
  console.log('req.body', req.body);
  try {
    await BlogPost.create(req.body);
    res.redirect('/');
  }
  catch (e) {
    console.error('error:', e);
  }
});

