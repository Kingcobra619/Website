// imports
const express = require('express');
const app = express();
const port = 8080;
const HOST = '0.0.0.0';

// Statuc files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'))
//app.use('/js', express.static(__dirname + 'public/js'))

// Views
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('', (req, res) => {
    res.render('clientSatisfactionHome');
})

app.get('/csEmployee', (req, res) => {
    res.render('csEmployee');
})

app.get('/csFeedback', (req, res) => {
    res.render('csFeedback');
})

app.get('/csFollowUp', (req, res) => {
    res.render('csFollowUp');
})

app.get('/csManager', (req, res) => {
    res.render('csManager');
})

app.get('/csTechnician', (req, res) => {
    res.render('csTechnician');
})

// listen in port 8080
app.listen(port, () => console.info(`Server started, running on https://${HOST}:${port}`));
// changed package.json .. the entry point was specified as index.js changed it to app.js