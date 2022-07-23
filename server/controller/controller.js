const data = require("../data/data");
const userModel=require("../models/users")

exports.getData=(req,res)=>{
  userModel.find()
  .then((result) => {
    res.send(result);
  })
  .catch((error) => {
    console.log(error);
  });
}

exports.updateData = (req, res) => {
  const { body, params } = req;
  console.log("body:", body);
  console.log("params:", params);
  res.send("success in update");
};
exports.postData= async(req,res)=>{
  const {body,params}=req;
  try{
      // To insert single document
      
      const newUser=new userModel(body);
      
      const result=await newUser.save();


      console.log(result)

  }catch(err){
      console.log(err)
  }
}
exports.signin=(req,res)=>{
  const {body,params}=req;
  console.log("body",body);
  userModel.find()
  .then((result) => {
    res.send(result);
  })
  .catch((error) => {
    console.log(error);
  });
}


exports.deleteData = (req, res) => {
  const { body, params } = req;
  console.log("body:", body);
  console.log("params:", params);
  res.send("success in delete");
};
