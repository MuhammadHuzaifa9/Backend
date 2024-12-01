import express from 'express';
import { comments } from './comments.js';
import { albums } from './albums.js';
import { photos } from './photos.js';
import { posts } from './posts.js';
import { todos } from './todos.js';
import { users } from './users.js';

const routes=express.Router();

routes.get('/comments',(req,res)=>{
    res.status(200).send({status:200,message:'success',data:comments})
});

routes.get('/albums',(req,res)=>{
    res.status(200).send({status:200,message:"success",data:albums})
})

routes.get('/photos',(req,res)=>{
    res.status(200).send({status:200,message:"success",data:photos})
})

routes.get('/posts',(req,res)=>{
    res.status(200).send({status:200,message:"success",data:posts})
})

routes.get('/todos',(req,res)=>{
    res.status(200).send({status:200,message:"success",data:todos})
})

routes.get('/users',(req,res)=>{
    res.status(200).send({status:200,message:"success",data:users})
})


export default routes;