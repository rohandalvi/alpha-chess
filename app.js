const express = require('express');
const http = require('http');
const path = require('path');
var Chess = require('./node_modules/chess.js').Chess;

const hostname = '127.0.0.1';
const PORT = process.env.PORT || 5000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World\n');
// });

// server.listen(PORT, () => {
//     console.log(`Server running`);
//     var chess = new Chess();
//     console.log("Done");
// });

express()
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => res.render('pages/index', {user: "Rohan", title: "Homepage"}))
    .listen(PORT, () => console.log(`Listening on ${PORT}`))


