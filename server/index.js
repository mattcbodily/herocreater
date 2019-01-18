const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.listen(4000, () => {
    console.log('Avengers Assembling on port 4000');
})
