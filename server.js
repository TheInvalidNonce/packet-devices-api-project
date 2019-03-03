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

const projectsUrl = 'https://api.packet.net/projects';
const devicesUrl = 'https://api.packet.net/devices/'


app.listen(3001, (req, res) => {
  console.log('Express server is running on localhost:3001');
});

app.get('/projects', (req, res) => {
  let options = {
    url: projectsUrl,
    headers: {
      "content-type": "application/json" ,
      "X-Auth-Token": process.env.TOKEN,
    }
  };
  request(options).pipe(res)
})

app.get('/devices/:id', (req, res) => {
  let options = {
    url: devicesUrl + req.params.id,
    headers: {
      "content-type": "application/json" ,
      "X-Auth-Token": process.env.TOKEN,
    }
  };
  request(options).pipe(res)
})

