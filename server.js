// =======================================
//              DEPENDENCIES
// =======================================
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: false }));

// =======================================
//              DATABASE
// =======================================
const bakedGoods = require('./models/bakedgoods.js');

// =======================================
//              ROUTES
// =======================================
// index route
app.get('/bakedgoods', (req, res) => {
    res.render('bakedgoods/index',{ bakedGoods:bakedGoods });
    //res.send(bakedGoods);
});

// new route
app.get('/bakedgoods/new', (req, res) => {
    res.render('bakedgoods/new');
});

// show route
app.get('/bakedgoods/:id', (req, res) => {
    res.render('bakedgoods/show', { bakedItem: bakedGoods[req.params.id] });
});

//post route
app.post('/bakedgoods', (req,res) =>{
    bakedGoods.push(req.body);
    res.redirect('/bakedgoods');
});

// =======================================
//              LISTENER
// =======================================
app.listen(port, () => {
    console.log(`Biscoff Bakery app listening on port: ${port}`);
});
