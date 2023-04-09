import express from "express";
import mongoose from "mongoose";
import data from "./data.js";
import Videos from "./dbModel.js"

const app=express();
const port=9000;

app.use(express.json());
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*"),
    res.setHeader("Access-Control-Allow-Headers","*"),
    next();
  })

const URI="mongodb+srv://nimeshnike2106:nimeshnike@cluster1.foskcbr.mongodb.net/shortify?retryWrites=true&w=majority";

await mongoose.connect(URI,{useNewUrlParser:true},async(err,result)=>{
    if(err) 
    console.log("----",err);
    else{
      console.log("Connected to MongoDB");
     
    }
  })
app.get("/",(req,res)=>res.status(200).send("Hello World"));

app.get("/v1/posts",(req,res)=>{
    res.status(200).send(data);
});

app.get("/v2/posts",(req,res)=>{
    Videos.find({},(err,data)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(200).send(data);
        }
    })
})

app.post("/v2/posts",(req,res)=>{
    const dbVideos=req.body

    Videos.create(dbVideos,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(201).send(data)
        }
    })
})

app.listen(port,()=>console.log(`Listening on port:${port}`));