const Adopted = require('../models/adopted');
const mongoose  = require('mongoose');

exports.adopted_getAllAdoptions =(req,res,next)=>{
    Adopted.find(req.body).populate('user_id').populate('pet_id').exec().then(result=>{
        console.log("GET/ adoptions",result);
        if(result.length > 0)
        {
            res.status(200).json(result);
        }
        else
        {
            res.status(404).json({
                message: "Not Found"
            })
        }
    }
    ).catch(err=>{
        console.log(err);
        res.status(500).json({
            error: err
        });
    })
};

exports.adopted_getAdoptionsById =(req,res,next)=>{
    Adopted.findById(req.params.id).exec().then(result=>{
        console.log("GET/:id adoptions",result);
        if(result !== null)
        {
            res.status(200).json(result);
        }
        else
        {
            res.status(404).json({
                message: "Record not found"
            })
        }
    }
    ).catch(err=>{
        console.log(err);
        res.status(500).json({
            error: err
        });
    })
};


exports.adopted_postAdoptions=(req,res,next)=>{
    const {user_id,pet_id,quantity} = req.body;
    const adoption = new Adopted({
        _id: new mongoose.Types.ObjectId(),
        user_id:user_id,
        pet_id:pet_id,
        quantity:quantity
    });
    adoption.save().then(result=>{
        console.log("Adopted POST/",result);
        res.status(201).json({
            res:result,
            message: "New Adoption"
        })
    }).catch(err=>{
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
};