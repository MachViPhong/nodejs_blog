const path = require('path')
const express = require('express')
const morgan = require('morgan')
const {engine} = require ('express-handlebars');
const app = express()
const port = 3001

//STATIC FILE
app.use(express.static(path.join(__dirname, 'public')))

//middleware xử lý dữ liệu từ form submit lên server
app.use(express.urlencoded({extended:"true"})); //body-parser
app.use(express.json());

//XMLHttpRequest, fetch, axios: gửi dữ liệu lên server

//HTTP logger
// app.use(morgan('combined'))

//template engine
app.engine('hbs', engine({
  extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
console.log('dirname',path.join(__dirname, 'resources/views'))


//Action ---> Dispatcher ---> Function handler
app.get('/', (req, res) => {

  // res.send('Hello World!')
  res.render('home');
});
app.get('/news', (req, res) => {

  // res.send('Hello World!')
  console.log('q: ', req.query.q)
  res.render('news');
});
app.get('/search', (req, res) => {
  // console.log('query:', req.query.q);
  // res.send('Hello World!')
  res.render('search');
});
app.post('/search', (req, res) => {
  console.log('req.body:', req.body)
  res.send(' ');
});


//start 1 webserver lắng nghe port 
//127.0.0.1 - localhost
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})