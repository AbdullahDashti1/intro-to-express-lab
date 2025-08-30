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

    const rolledNumber = Math.floor(Math.random() * rollNumber) + 0

    res.send(`<h1>Your Majesty, you've rolled a ${rolledNumber}.</h1>`);

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

app.get('/shoes', (req, res) => {
    const shoes = [
        { name: "Birkenstocks", price: 50, type: "sandal" },
        { name: "Air Jordans", price: 500, type: "sneaker" },
        { name: "Air Mahomeses", price: 501, type: "sneaker" },
        { name: "Utility Boots", price: 20, type: "boot" },
        { name: "Velcro Sandals", price: 15, type: "sandal" },
        { name: "Jet Boots", price: 1000, type: "boot" },
        { name: "Fifty-Inch Heels", price: 175, type: "heel" }
    ];

    const minPrice = req.query["min-price"];
    const maxPrice = req.query["max-price"];
    const type = req.query.type;

    let result = [];

    for (let shoe of shoes) {
        let isValid = true;

        if (minPrice && shoe.price < Number(minPrice)) {
            isValid = false;
        }
        if (maxPrice && shoe.price > Number(maxPrice)) {
            isValid = false;
        }
        if (type && shoe.type !== type) {
            isValid = false;
        }

        if (isValid) {
            result.push(shoe);
        }
    }

    res.send(result);
});

app.listen(3000, () => {
    console.log('Listening on app 3000');
});