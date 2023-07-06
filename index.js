import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';
import Student from './db_schema.js';
import "./database.js";

dotenv.config();
const mongoURL = process.env.MONGO_URL;
// console.log('Hello World on port with ausername');
const app = express();
const t = new Student({
    name: "Dhruv",
    age: 36,
    grade: 10
})
t.save()
.then(()=>{
    console.log('hello');
});
app.get('/students',async (req,res)=>{
    let d = null;
    await Student.find({})
    .then((data)=>{ d=data
    });
    res.send(d);
});
app.post('/send',(req,res)=>{
    console.log( req.headers.name);
    // const {name, age, grade}=req.headers
    const temp = new Student({
        name: req.headers.name,
        age:req.headers.age,
        grade:req.headers.grade
    });
    temp.save()
    .then(()=>{
        console.log("done");
    })
    .catch((err) => console.log(err))
    res.send("hello students");
});
app.listen(3000,(req,res)=>{
    console.log("running on port 3000")});