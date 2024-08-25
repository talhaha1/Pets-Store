const Admin = require('../models/admin'); 
const mongoose = require('mongoose');


exports.admin_getById= (req, res, next) => {
    const id = req.params.adminId;
    Admin.findById(id)
        .exec()
        .then(admin => {
            if (admin) {
                res.status(200).json(admin);
            } else {
                res.status(404).json({ message: "Admin not found" });
            }
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
};


exports.admin_getAllAdmins = (req, res, next) => {
    Admin.find()
        .exec()
        .then(admins => {
            res.status(200).json(admins);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
};


exports.admin_postAdmin = (req, res, next) => {
    const admin = new Admin({
        _id: new mongoose.Types.ObjectId(),
        user_id: req.body.user_id 
    });

    admin.save()
        .then(result => {
            res.status(201).json({
                message: "Admin created successfully",
                createdAdmin: result
            });
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
};


exports.admin_deleteAdmin =(req, res, next) => {
    const id = req.params.adminId;
    Admin.deleteOne({_id: id })
        .exec()
        .then(result => {
            if (result.deletedCount > 0) {
                res.status(200).json({ message: "Admin deleted successfully" });
            } else {
                res.status(404).json({ message: "Admin not found" });
            }
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
};
