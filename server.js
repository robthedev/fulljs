import config from './config';
import express from 'express';
import fs from 'fs';

const server = express();

server.get('/', (req, res) => {
    res.send('hello ');
});

server.use(express.static('public'));

server.get('/about.html', (req, res) => {
    fs.readFile('./about.html', (err, data) => {
        res.send(data.toString());
    });
});

server.listen(config.port, () => {
    console.log('express listening on port ', config.port);
});