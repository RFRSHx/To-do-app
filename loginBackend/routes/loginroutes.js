var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'SergiuLike15935798',
  database : 'to_do_app'
});
connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... ");
} else {
    console.log("Error connecting database ... ");
}
});

exports.register = async function(req,res){
    const password = req.body.password;
    const encryptedPassword = await bcrypt.hash(password, saltRounds)
    var users={
       "username":req.body.username,
       "email":req.body.email,
       "password":encryptedPassword
     }
    
    connection.query('INSERT INTO users SET ?',users, function (error, results, fields) {
      if (error) {
        res.send({
          "code":400,
          "failed":"error ocurred"
        })
      } else {
        res.send({
          "code":200,
          "success":"user registered sucessfully"
            });
        }
    });
  }

  exports.login = async function(req,res){
    var username= req.body.username;
    var password = req.body.password;
    connection.query('SELECT * FROM users WHERE username = ?',[username], async function (error, results, fields) {
      if (error) {
        res.send({
          "code":400,
          "failed":"error ocurred"
        })
      }else{
        if(results.length >0){
          const comparision = await bcrypt.compare(password, results[0].password)
          if(comparision){
              res.send({
                "code":200,
                "success":"login sucessfull"
              })
          }
          else{
            res.send({
                 "code":204,
                 "success":"Username and password does not match"
            })
          }
        }
        else{
          res.send({
            "code":206,
            "success":"Username does not exits"
              });
        }
      }
      });
  }