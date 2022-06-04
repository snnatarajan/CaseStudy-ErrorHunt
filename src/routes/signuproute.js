const express = require('express'); 
const signupRouter = express.Router();
const user = require('../data/user');

signupRouter.get('/',function(req,res){

    res.render('signup',{});
    
})

signupRouter.get("/adduser",function(req,res){
    // Part 2 Point 10 deprecation caused by param removed by use of query 
    var newuser = {
        "id":user.length+1,
        "uid":req.query.uid,
        "pwd":req.query.pwd
    };

    //console.log(newuser);
    user.push(newuser);
    //console.log(user);
    res.redirect("/login");
})

module.exports = signupRouter;