const express=require("express");
const app=express();
const port=5000;
const projects=require("./routes/project");
app.get("/an",(req,res)=>{
    res.send("hello world");
});
 app.listen(port,()=>{
    console.log(`leranig  on the port ${port}`);
 });
 app.use("/",projects);