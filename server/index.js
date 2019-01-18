const express = require('express');
const bodyParser = require('body-parser');
const ctrl = require('./controller');

const app = express();
app.use(bodyParser.json())

app.get('/api/heroes', ctrl.getHeroes)

app.post('/api/heroes', ctrl.addHeroes)

app.listen(4000, () => {
    console.log('Avengers Assembling on port 4000');
})