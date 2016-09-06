const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const ejs = require('ejs')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/api/cards', (req, res) => {
  res.json({ Curry: '20' });
});

// 设置views路径和模板
app.set('views', './dist')
app.set('view engine', 'html')
app.engine('html', ejs.renderFile)
console.log(path.join(__dirname,'/../dist/'))

app.use('/', express.static(path.join(__dirname, '/../dist/')))

app.listen(port)
console.log(`Server is listening ${port}`)
