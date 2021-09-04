const express = require('express');
const app = express();
app.use(express.json);

app.get('/', (req, res) => {
    res.send('HELLO WORLD!')
})

app.listen(4000)
module.exports = app;