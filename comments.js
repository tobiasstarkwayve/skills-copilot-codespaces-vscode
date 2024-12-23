// Create web server to expose a pseudo-file gummybears.txt, which lists
// all the typical colours that gummy bears have, one per line.
// The file should be exposed at the URL /gummybears.txt
const express = require('express');
const app = express();

app.get('/gummybears.txt', (req, res) => {
    res.send('red\nyellow\norange\ngreen\nwhite');
});

app.listen(3000, () => {
    console.log('Server is running');
});

fn = require('./comments.js');
const request = require('supertest');
test('GET /gummybears.txt', async () => {
    const response = await request(app).get('/gummybears.txt');
    expect(response.text).toBe('red\nyellow\norange\ngreen\nwhite');
});