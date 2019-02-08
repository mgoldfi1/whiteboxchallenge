const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const axios = require('axios')

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/products', (req,res) => {
    axios.get('https://next.json-generator.com/api/json/get/EkzBIUWNL')
    .then(response => res.status(200).send(response.data))


    
})


app.listen(3001, () => console.log("Server up and running!"));


module.export = app;