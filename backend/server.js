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
const hero=require("./routes/hero.js");
const path=require("path");
const morgan=require("morgan");
app.use(morgan("dev"));

app.get("/",(req,resp)=>{
    resp.send("server working");
});
app.use("/hero",hero);


app.listen(5000,()=>{
    console.log("server started...");
});
