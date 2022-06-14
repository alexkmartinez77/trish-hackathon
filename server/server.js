const express = require('express');
const morgan = require('morgan');
const axios = require('axios');

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));
app.use(express.json());

/* app.get('/api', (req, res) => {
    axios.get(`https://bodybuilding-quotes1.p.rapidapi.com/random-quote`)
        .then((result) => {
            res.send(result.data);
        })
        .catch((error) => {
            console.error(error);
            res.send('An error occured.');
        })
});
 */

/* 
 const options = {
  method: 'GET',
  url: 'https://bodybuilding-quotes1.p.rapidapi.com/random-quote',
  headers: {
    'X-RapidAPI-Key': '72e066e49emshcd1e7705cf8de7dp16e555jsnc11b8f72aed2',
    'X-RapidAPI-Host': 'bodybuilding-quotes1.p.rapidapi.com'
  }
};
  */

/* 
 axios.request(options).then(function(response){
    const quoteData = response.data;
    console.log(quoteData);

}).catch(function (error) {
	console.error(error);
});  */
 
module.exports = app;