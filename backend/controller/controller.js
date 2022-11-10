const mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "bnbdb"
});


//Register fuction 
const createUser = (req, res) => {
    
  const {firstname,lastname,email,password,confirm} = req.body; 
   console.log(firstname)
   console.log(email)
  
  

  if(firstname && lastname && email && password && confirm){



    con.query('SELECT * FROM user WHERE email =?',[email],function (error, results, fields){

      if(results.length > 0)
      { 
          res.send('Email exists already')
      }
      else{

        var user={

          "firstname":firstname,
          "lastname":lastname,
          "email":email,          
          "password":password
       
      }
       con.query('INSERT INTO user SET ?',[user], function (error, results, fields) 
        {
             if(error){
              res.send('yeey')

             }else{
              res.send('ddd')
             }

        })


        
      }
  
    });

  }else{

    res.send('fill all form fields')
  }
  
};


//Register fuction 
const login = (req, res) => {

  const {email,password} = req.body; 
   
   
  con.query('SELECT * FROM user WHERE email =? and password =?',[email,password],function(error, results){
    
    if (results.length > 0) {
    
      res.send('success')
  
    }else{
      res.send('invalid login details')
    }
    });


}



module.exports = {
 
  createUser,
  login
  
}    