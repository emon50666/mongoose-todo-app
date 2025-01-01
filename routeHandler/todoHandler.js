const express = require("express");
const router = express.Router();
const mongoose = require('mongoose')
const todoSchema = require("../schemas/todoSchema")


// create a model 
const Todo = new mongoose.model('Todo',todoSchema)



// get all todos 

router.get('/',async (req,res)=>{

})

// get a todo by id

router.get('/:id',async (req,res)=>{
    
})

// post a todo

router.post('/',async (req,res)=>{
   
   try{
   
    const newTodo = new Todo(req.body)
    const todoData = await newTodo.save();
    res.status(201).send({data: todoData, message:'todo submited success'})
   }
   catch(error){
    res.status(500).send({message:error.message})
  }
    
    
    
})

// post multiple todo

router.post('/all',async (req,res)=>{
    
})

// delete a todo

router.delete('/:id',async (req,res)=>{
    
})

// update a todo

router.put('/:id',async (req,res)=>{
    
})

module.exports = router ;