const express=require('express');
const router=express.Router();
const controller=require('../controller/controller')

router.get("/",controller.getData)
router.post("/",controller.postData)
router.post("/signup",controller.signin)
router.delete("/:id",controller.deleteData)
router.put("/:id",controller.updateData)

module.exports=router;