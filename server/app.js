const express = require('express');
const morgan = require('morgan');
const bodyPraser = require('body-parser');
const mongoose = require('mongoose');

const petsRoute = require('./router/pets');
const adoptedRoute = require('./router/adopted')

const app = express();
mongoose.connect('mongodb://localhost:27017/Pets-Store');




app.use(morgan('dev'));
app.use(bodyPraser.urlencoded({extended:false}));
app.use(bodyPraser.json());

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Header","Origin,X-Requested-With, Content-Type,Accept,Authorization");

    if(req.method === 'OPTIONS')
    {
        res.header("Access-Control-Allow-Methods",'PUT, POST, PATCH, DELETE, GET');
        res.status(200).json({});
    }
    next();
});


app.use('/pets',petsRoute);
app.use('/adopted',adoptedRoute);

app.use((req,res,next)=>{
    const error = new Error("Route Not Found");
    error.status = 404;
    next(error);
});
app.use((err,req,res,next)=>{
    res.status(err.status || 500).json({
        error:{
            message : err.message
        }
    })
})

module.exports = app;