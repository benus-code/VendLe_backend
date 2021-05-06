const express =require('express');
const app=express();
const bodyParser=require('body-parser');
const cors=require('cors');

/*****cors error protection and data parsing*****/
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});
app.use(cors());
app.use(bodyParser.json({limit:"50mb",extended: true, parameterLimit:50000}));

/*******endpoints******/
app.use('/',(req,res,next)=>{
	res.json('Hello world !')
})

module.exports=app