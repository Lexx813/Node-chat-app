const express = require('express');
const app = express();
const path = require('path');


app.use(express.static('public'));


const publicPath = path.join(__dirname,'../public')
const port = process.env.PORT || 3000;

app.listen(port, (req, res) => {
    console.log(`Server started on port:${port}`);
})