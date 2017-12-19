// Get dependencies
const express=require('express');
const path=require('path');
const http=require('http');
const bodyParser=require('body-parser');

// Get our API routes 引入 api路由
const api = require('./server/routes/api');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// Point static path to dist 指定静态路径
app.use(express.static(path.join(__dirname,'dist')));

// Set our api routes 设置我们的api路由
app.use('/api',api);

//Catch all other routes and return the index file
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'dist/index.html'));
});

// Get port from environment and store in Express.
const port = process.env.PORT || '3000';
app.set('port',port);

// Create Http Server
const server = http.createServer(app);

//Listen on provided port,on all network interfaces.
server.listen(port,()=>console.log(`API running on localhost:${port}`));
