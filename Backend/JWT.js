const {sign, verify} = require('jsonwebtoken');
require('dotenv').config();

const createToken = (userID) => {
    const accessToken = sign({userID},process.env.JWT_SECRET_KEY, {expiresIn: "5h"});
    return accessToken;	
};

const validateToken = (req, res, next) => {
    const accessToken = req.headers["access-token"]
    if (!accessToken) {
        return res.status(402).json({status:402,message: "User not authenticated"}); 
    }
    try {
        const validToken = verify(accessToken,process.env.JWT_SECRET_KEY)
        if (validToken) {
            req.userId = validToken.userID;
            return next();
        }else{
            return res.status(402).json({status:402,message: "User not authenticated"});
        }
    }catch(err) {
        console.log(err);
        return res.status(402).json({status:402,message: "JWT ERROR",err});
    }   

  };

module.exports = {createToken, validateToken};