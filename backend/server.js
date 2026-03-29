// const express=require("express");
// const app=express();
// const port=3000;
// const projects=require("./routes/project");
// app.get("/an",(req,res)=>{
//     res.send("hello world");
// });
//  app.listen(port,()=>{
//     console.log(`leranig  on the port ${port}`);
//  });
//  app.use("/project",projects);
const express=require("express");
const app=express();
const path=require("path")
const cv=path.resolve(__dirname,"public");
const morgan=require("morgan");
app.use(morgan("dev"));
app.use(express.static(cv));

app.use((req,res)=>{
   
    res.send("hello word");
});
app.listen(3000,()=>{
    console.log("server started...");
});