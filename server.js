const express = require('express');
const proxy = require('http-proxy-middleware');
const request = require('request');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.options('*', cors());

app.use( (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const url = 'https://api.packet.net/projects';


app.listen(3001, (req, res) => {
  console.log('process.env.TOKEN :', process.env.TOKEN);
  console.log('Express server is running on localhost:3001');
});

app.get('/projects', (req, res) => {
  let options = {
    url: url,
    headers: {
      "content-type": "application/json" ,
      "X-Auth-Token": process.env.TOKEN,
    }
  };
  request(options).pipe(res)
})

