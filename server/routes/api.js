const express = require('express');
const router = express.Router();


const db=require('../db.js');

//declare axios for making http requests
const axios = require('axios');
const API = `https://jsonplaceholder.typicode.com`;

// Get api listing.
router.get('/',(req,res)=>{
    res.send('api works');
});

//Get all posts
router.get('/posts',(req,res)=>{
    // Get posts from the mock api
    // This should ideally be replaced with a service that connects to MongoDB
    /* axios.get(`${API}/posts`)
        .then(posts=>{
            res.status(200).json(posts.data);
        })
        .catch(error=>{
            res.status(500).send(error)
        }); */


    //mongoose
    db.apps.find({
        status:{$gt:-1}
    }).
    limit(10)
    .then(posts=>{
        res.status(200).json(posts);
    })
    .catch(error=>{
        res.status(500).send(error)
    });
});

module.exports=router;