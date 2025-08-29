const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));


app.get('/greetings/:username', (req, res) => {
    const user = req.params.username;
    res.send(`<h1>Greetings and Salutations to my pal, ${user}!</h1>`);
});

app.get('/roll/:number', (req, res) => {
    const rollNumber = req.params.number;

    if (isNaN(rollNumber)) {
        return res.send(`<h1>You must specify a number.</h1>`);
    };

    res.send(`<h1>Your Majesty, you've rolled a ${rollNumber - 2}.</h1>`);

});

app.get('/collectibles/:index', (req, res) => {
    const collectibles = [
        { name: 'shiny ball', price: 5.95 },
        { name: 'autographed picture of a dog', price: 10 },
        { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
    ];

    const collectible = collectibles[req.params.index];

    if (collectible) {
        res.send(`<h1>Hey customer, the price for ${collectible.name} is $${collectible.price}.</h2>`);
    } else {
        return res.send(`<h1>Unfortunately the item is not available, we will contact you soon when the item is instock.</h1>`);
    };

});



app.listen(3000, () => {
    console.log('Listening on app 3000');
});