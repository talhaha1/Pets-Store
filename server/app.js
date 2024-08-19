const express = require('express');
const morgan = require('morgan');
const bodyPraser = require('body-parser');
const mongoose = require('mongoose')

const petsRoute = require('./router/pets')


const app = express();
mongoose.connect('mongodb://localhost:27017/Pets-Store');




app.use(morgan('dev'));
app.use(bodyPraser.urlencoded({extended:false}));
app.use(bodyPraser.json());

app.use('/pets',petsRoute);

app.use('/',(req,res,next)=>{
    res.status(200).json({
        message :"Server Working now!!!!"
    });
});

module.exports = app;