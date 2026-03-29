const express=require("express");
const multer=require("multer");
const cors=require("cors");
const path=require("path");
const fs=require("fs");
const hero=express();

const profilePath=pathresolve(__dirname,"public");
hero.use(cors(
    {
        origin:"http://localhost:5173/"
    }
));
hero.use(murt());
hero.post('/photo',(err,req,resp)=>{
    resp.errr(200).send("profile updated successfully");
});
module.export=hero;