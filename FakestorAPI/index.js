import express from "express";
import dotenv from "dotenv"
import routes from "./productRoutes.js";
const app=express();
dotenv.config();


app.get('/',(req,res)=>{
    res.status(200).send('Welcome to Backend')
})
// app.get('/profile',(req,res)=>{
//     res.status(200).send("Welcome to Profile")
// })
// app.get('/users/:id',(req,res)=>{
//     const id=req.params.id;
//     res.status(200).send(`Welcome to my Product ${id}`)
// })
// app.get('*',(req,res)=>{
//     res.status(404).send("Page Not Found")
// })

app.use('/',routes)

const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})


