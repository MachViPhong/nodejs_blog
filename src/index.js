const path = require('path')
const express = require('express')
const morgan = require('morgan')
const {engine} = require ('express-handlebars');
const app = express()
const port = 3000

//STATIC FILE
app.use(express.static(path.join(__dirname, 'public')))

//HTTP logger
app.use(morgan('combined'))

//template engine
app.engine('hbs', engine({
  extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
console.log('dirname',path.join(__dirname, 'resources/views'))

app.get('/', (req, res) => {

  // res.send('Hello World!')
  res.render('home');
})
app.get('/news', (req, res) => {

  // res.send('Hello World!')
  res.render('news');
})


//127.0.0.1 - localhost
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})