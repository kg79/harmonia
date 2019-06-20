const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');
const IP = 'localhost'
const PORT = 3456;
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

const serveStatic = require('serve-static');
app.use(serveStatic(path.join(__dirname, 'public')));

app.use(express.static('public'))
app.get('/', (req, res) => {
    res.render('index')
})

app.get('/grid', (req, res) => {
    res.render('gridTest')
})

app.get('/favicon.ico', (req, res) => {
    res.end('favicon')
})


app.listen(PORT, IP, console.log(`${IP}:${PORT}`));