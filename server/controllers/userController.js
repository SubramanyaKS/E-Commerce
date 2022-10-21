const validators = require('../services/validator');
const User = require('../models/userSchema');
const bcrypt = require('bcrypt');
const helper = require('../services/helper');

//User through ID
exports.getUserId = async (req, res,next) => {
    try {
      const users = await User.find({userID: req.params.id}, { _id: 0, __v: 0 });
      if (users.length > 0) {
        res.status(200).json({
          status: 'success',
          results: users.length,
          data: {
            users,
          },
        });
      } else {
        let err = new Error();
        err.message = 'No User available in the Database';
        err.status = 400;
        next(err);
      }
    } catch (err) {
      res.status(404).json({
        status: 'fail',
        message: err,
      });
    }
  };

///Get All User
exports.getUser = async (req, res) => {
    try {
      const users = await User.find({}, { _id: 0, __v: 0 });
      if (users.length > 0) {
        res.status(200).json({
          status: 'success',
          results: users.length,
          data: {
            users,
          },
        });
      } else {
        res.status(400).json({
          status: 'success',
          data: {
            message: 'No User available in the Database',
          },
        });
      }
    } catch (err) {
      res.status(404).json({
        status: 'fail',
        message: err,
      });
    }
  };

//Register User
exports.newUser = async (req, res) => { 
    try {
       if (validators.ValidateName(req.body.name)) {
         if(validators.ValidateAge(req.body.dateOfBirth)){
           if(validators.ValidatePassword(req.body.password)){
             console.log("Pincode",req.body.pincode);
             console.log(req.body.gender,"",req.body);
             if(validators.ValidateGender(req.body.gender)){
              console.log("Hi gender");
               if(validators.ValidatePhoneNo(req.body.mobileNumber)){
                console.log("Mobile");
                 if(validators.ValidatePincode(req.body.pincode)) {
                  console.log("Hi");
                   const Id = await helper.generateUserId();
                   console.log(Id);
                   const hashPassword = await bcrypt.hash(req.body.password,10);

                   const newUser = await User.create({
                   userID: Id,
                   name: req.body.name,
                   password: hashPassword,
                   gender: req.body.gender,
                   dob: req.body.dateOfBirth,
                   email: req.body.email,
                   mobileNumber: req.body.mobileNumber,
                   pincode: req.body.pincode,
                   city:req.body.city,
                   state: req.body.state,
                   country: req.body.country,
                 });
                 console.log(newUser,"new Data");
                 //newUser=JSON.stringify(newUser);
                 console.log(newUser,"new super Data");
                   res.status(201).json({
                  data:
                       newUser,
                  
                   });
                   //console.log(res.data);
                 }
                 else{
                   res.status(400).json({
                     status: 'error',
                     results:'PinCode should have 6 digits',
                   });
 
                 }
               }
               else{
                 res.status(400).json({
                   status: 'error',
                   results:'Mobile Number should have 10 digits',
                 });
 
               }
 
             }else{
               res.status(400).json({
                 status: 'error',
                 results: 'Gender should be either M or F',
               });
 
             }
           }
           else{
             res.status(400).json({
               status: 'error',
               results: 'Password is minimum 5 and maximum 10 characters',
             });
           }
         }else{
           res.status(400).json({
             status: 'error',
             results: 'Age should be greater than 20 and less than 100',
           });
 
         }
         
       } else {
         res.status(400).json({
           status: 'error',
           results: 'Name should have minimum 3 and maximum 50 characters',
         });
       }
     } catch (err) {
       res.status(404).json({
         status: 'fail',
         message: err.message,
       });
     }
};

 // User Login
 exports.userLogin=async(req, res)=>{
   try{
     const b=await User.findOne({userId:req.body.userId});
     if(!b){
       throw createError(404,'User not found');

     }
     console.log(b.password,"Password");
     let match = await bcrypt.compare(req.body.password, b.password);
     if(match){
      console.log("Password matches!")
            res.status(200).send(true);
     }
     else{
        console.log("Password doesn't match!")
          res.status(400).json({
             message: `Password doesnot match `,
          });
     }
        // .then(result => {
        //     console.log(result);
        //     res.send(result);
        // })
        // .catch(err => {
        //     console.log(err)
        // })
    // const hash = bcrypt.hash(req.body.password, 10);
     //console.log(hash)
    //  bcrypt.compare(req.body.password, b.password, function(error, isMatch) {
    //    if (error) {
    //      throw error
    //    } else if (isMatch) {
    //      console.log("Password doesn't match!")
         
    //      res.status(400).json({
    //          message: `Password doesnot match `,
         
    //      });
    //    } else {
    //      console.log("Password matches!")
    //      res.status(200).send(true);
 
    //    }
    //  })
     
 
   }
   catch(err){
     res.status(404).json({
       status: 'fail',
       message: err.message,
     });
   }
 
 }

 //update user
 exports.updateUser = async (req, res) => {
    try {
      const notes = await User.findOneAndUpdate(
        { userID: req.params.id },
        req.body,
        {
          new: true, //to return new doc back
          runValidators: true, //to run the validators which specified in the model
        }
      );
      if (notes != null) {
        res.status(200).json({
          status: 'success',
          data: {
            notes,
          },
        });
      } else {
        res.status(400).json({
          status: 'success',
          data: {
            message: `No User available with ID ${req.params.id} `,
          },
        });
      }
    } catch (err) {
      res.status(404).json({
        status: 'fail',
        message: err,
      });
    }
  };

 exports.invalid = async (req, res) => {
    res.status(404).json({
      status: 'fail',
      message: 'Invalid path',
    });
  };