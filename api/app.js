const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const axios = require('axios')

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// All products endpoint for homepage
app.get('/api/products', (req,res) => {
    axios.get('https://next.json-generator.com/api/json/get/EkzBIUWNL')
    .then(response => res.status(200).send(response.data))
})

//Single product endpoint

app.get('/api/product/:id', (req,res) => {
    axios.get('https://next.json-generator.com/api/json/get/EkzBIUWNL')
    .then(response => {
        const item = response.data.find((el) => { return req.params.id === el._id})
            if (item) {
                res.status(200).send(item)
            } else {
                res.status(404).send({error: "Item not found."})
            }
    })
})


app.listen(3001, () => console.log("Server up and running!"));


module.export = app;