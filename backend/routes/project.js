const express=require("express");
const router=express.Router();
router.get("/",(req,res)=>{
    res.json([
        {id:'1',name:'robort arm'},
        {id:'2',name:'fuel station'}
    ]);
});
module.exports=router;