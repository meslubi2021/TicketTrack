const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');

var JWT_SCRET = "Programmertarun";

//Route 2 :- Create User Using: POST "/api/auth/". Doesn't require Auth
router.post('/createuser', [
  body('name','enter minmum 3 words').isLength({ min: 3 }),
  body('email').isEmail(),
  body('password','enter password size is 3 words').isLength({ min: 3 }),
], async (req, res) => {
  //if there are bad error  , return  bad request and  the error
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

//check if user exits or not
try{
  let user = await User.findOne({email:req.body.email});
  if(user){
    return res.status(400).json({error:"sorry user with this email is already exits "})
  }
  const salt = await bcrypt.genSalt(10); 
  const secPass = await bcrypt.hash(req.body.password,salt);
   user = await User.create({
    name: req.body.name,
    email:req.body.email ,
    password:secPass ,
  })
 
  
  const data  ={
  user:{
    id:user.id
  }
  }
  const authtoken = jwt.sign(data, JWT_SCRET);
  
  res.json({authtoken})
}catch(error){
  console.error(error.message);
  res.status(500).send("some error occured");
}
});

// Route 2 :- Authenticate User Using: POST "/api/auth/Login". 
router.post('/Login', [
 
  body('email', 'Enter  A valid Email ').isEmail(),
  body('password', 'Password cannot be black').exists({ min: 3 }),
], async (req, res) => {
 let  success=false;
  
    //if there are bad error  , return  bad request and  the error
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {email, password} = req.body;
  try{
    let user = await User.findOne({email});
    if(!user){
      success=false;

      return res.status(400).json({error:"please try login with correct  credentials"});
    }

    const passwordCompare =  await bcrypt.compare(password, user.password);
    if(!passwordCompare){
      success=false;
      return res.status(400).json({success,error:"please try login with correct  credentials"});

    }
    const data  ={
      user:{
        id:user.id
      }
      }
      const authtoken = jwt.sign(data, JWT_SCRET);
      success = true;
  res.json({success,authtoken,data})
      
  }catch(error){
    console.error(error.message);
    res.status(500).send("Internal server error occured");
  }
});

// Route 3 :-get loggedin users details Using: POST "/api/auth/".  require login
router.post('/getuser',fetchuser, async (req, res) => {
  try{
    const userId = req.user.id; // Access the user's ID from req.user
    const user = await User.findById(userId).select("-password");
    res.send(user);
  }catch(error){
    console.error(error.message);
    res.status(500).send("Internal server error occured");
  }

})
// Route 4: Update user data Using: PUT "/api/auth/updateuser". Requires login
router.put('/updateuser', fetchuser, [
  // Validation logic for updated fields (if needed)...
], async (req, res) => {
  const { name, email } = req.body;
  const userFields = {};
  if (name) userFields.name = name;
  if (email) userFields.email = email;

  try {
    let user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    user = await User.findByIdAndUpdate(
      req.user.id,
      { $set: userFields },
      { new: true }
    );

    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error occurred");
  }
});

// Route 5: Delete user Using: DELETE "/api/auth/deleteuser". Requires login
router.delete('/deleteuser', fetchuser, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    await User.findByIdAndRemove(req.user.id);
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error occurred");
  }
});


module.exports = router;
