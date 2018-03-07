import config from './config';
import express from 'express';
import fs from 'fs';
import apiRouter from './api';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';

const server = express();

//sass config
server.use(sassMiddleware({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'public')
}));

//template config
server.set('view engine', 'ejs');

import './serverRender';

server.get('/', (req, res) => {
    res.render('index', {
        content: '...'
    });
});

//api 
server.use('/api', apiRouter);

//express middleware setup
server.use(express.static('public'));

/* server.get('/about.html', (req, res) => {
    fs.readFile('./about.html', (err, data) => {
        res.send(data.toString());
    });
}); */

server.listen(config.port, config.port, () => {
    console.log('express listening on port ', config.port);
});