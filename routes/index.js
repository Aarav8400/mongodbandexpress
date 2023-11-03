var express = require('express');
var router = express.Router();

const userModel=require("./users")


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/create', async function(req, res, next) {
  const createuser=await userModel.create({
    username:"vikas8400",
    name:"aarav",
    age:25
  })
  res.send(createuser)

});

router.get("/allusers",async function(req,res){
 let allUser=await userModel.find()
 res.send(allUser)
})

router.get("/delete", async function(req,res){
  let deleteduser=await userModel.findOneAndDelete({
    username:"vikas8400"
  })
  res.send(deleteduser)
})

module.exports = router;
