


const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/User')


const protect = (req, res, next) => {
  const authHeader = req.headers.authorization;
  // console.log("Hello" , authHeader)
  if(authHeader){
    const token = authHeader.split(' ')[1];
    

    jwt.verify(token, process.env.secretOrPrivateKey, (err, user) => {
      if(err){
        return res.status(403).send({status: "Not found user", user: req.user});
      }
      req.user = user;
      next();
    });
  }else{
    
    return res.status(403).send({status: "Not Autherized", user: req.user});
  }
}

module.exports = protect;
// module.exports = isAuthenticated;