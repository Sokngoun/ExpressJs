const express = require('express')
const Task = require('../models/taskModel')


const getAllTasks = async (req,res)=>{
    try{
        const tasks = await Task.find({})
        res.status(200).json({tasks: tasks})
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

const createTask = async (req,res)=>{
   try{
     // res.send('Create')
    // console.log(req.body)
        const task = await Task.create(req.body)
        res.status(201).json({task})
   }catch(err){
        res.status(500).json({message: err.message})
   }
}

const getTask = async (req,res)=>{
    try{
       const {id:taskID} = req.params
       const task = await Task.findOne({_id:taskID})
       if(!task){
            return res.status(404).json({message: `Task not found TaskID ${taskID}`})
       }
       res.status(200).json({task:task})
    }
    catch(err){
            res.status(500).json({message: err.message})
        }
   
}
const putTask = (req,res)=>{
    res.send('Update item');
}

const deleteTask = (req,res)=>{
    res.send('Delete Item');
}

module.exports = { getAllTasks,createTask,getTask,putTask,deleteTask}