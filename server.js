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
    } else if (rollNumber >= 0 && rollNumber <= 9) {
        return (rollNumber - 2);
    };

    res.send(`<h1>You rolled a ${rollNumber - 2}.</h1>`);

});

app.listen(3000, () => {
    console.log('Listening on app 3000');
});