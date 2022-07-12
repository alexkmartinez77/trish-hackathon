const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
require('dotenv').config()

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));
app.use(express.json());

app.get('/api1', (req, res) => {

  const options = {
    method: 'POST',
    url: 'https://motivational-quotes1.p.rapidapi.com/motivation',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': process.env.REACT_APP_APIKEY,
      'X-RapidAPI-Host': 'motivational-quotes1.p.rapidapi.com'
    },
    data: '{"key1":"value","key2":"value"}'
  };
  
  axios.request(options)
  .then(quoteData => {
    res.send(quoteData.data);
  });
  
});

app.get('/api2', (req, res) => {

  const options = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/equipment/body%20weight',
    headers: {
       'X-RapidAPI-Key': process.env.REACT_APP_APIKEY,
       'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
   };

    axios.request(options)
    .then(exercises => {
      res.send(exercises.data);
    });

  });

 
module.exports = app;