const express = require('express');
const Pets = require('../model/pets');
const mongoose  = require('mongoose');
const router = express.Router();

router.get('/',(req,res,next)=>{
    Pets.find({}).exec().then(result=>{
        console.log("heyyyyy",result);
        if(result.length > 0)
        {
            res.status(200).json({
                message: "Getting all pets",
                pets:result
            });
        }
        else
        {
            res.status(404).json({
                pets:result,
                pet_count:result.length,
                message: "No pets in Database!!"
            })
        }
    }
    ).catch(err=>{
        console.log(err);
        res.status(500).json({
            error: err
        });
    })
}
);


router.post('/',(req,res,next)=>{
    const {name,type,breed,price,quantity} = req.body;
    const pet = new Pets({
        _id: new mongoose.Types.ObjectId(),
        name: name,
        type:type,
        breed:breed,
        price:price,
        quantity:quantity
    });
    pet.save().then(result=>{
        console.log(result);
        res.status(201).json({
            res:result,
            message: "Welcome Pet"
        })
    });
});

module.exports = router;
