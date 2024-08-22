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

router.get('/:id',(req,res,next)=>{
    Pets.findById(req.params.id).exec().then(result=>{
        console.log("heyyyyy",result);
        if(result !== null)
        {
            res.status(200).json(result);
        }
        else
        {
            res.status(404).json({
                message: "Pet not found"
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
    }).catch(err=>{
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});


router.delete('/',(req,res,next)=>{
    Pets.deleteMany({}).exec().then(result=>{
        console.log("del all",result);
        if(result.deletedCount>0)
        {
            res.status(200).json(result);
        }
        else
        {
            res.status(404).json({
                message: "Pets already gone"
            });
        }
    }
    ).catch(err=>{
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

router.delete('/:id',(req,res,next)=>{
    Pets.deleteOne({_id:req.params.id}).exec().then(result=>{
        console.log("del one",result);
        if(result.deletedCount>0)
        {
            res.status(200).json(result);
        }
        else
        {
            res.status(404).json({
                message: "Pet already gone"
            });
        }
    }
    ).catch(err=>{
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

router.patch('/:id',(req,res,next)=>{
    Pets.updateOne({_id:req.params.id},{$set: req.body}).exec().then(result=>{
        console.log("del one",result);
        if(result.matchedCount > 0)
        {
            res.status(200).json(result);
        }
        else
        {
            res.status(404).json({
                message: "Pet not found"
            });
        }
    }
    ).catch(err=>{
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});
module.exports = router;
