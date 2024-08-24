const express=require('express')
const bodyParser=require('body-parser')

const app=express()
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.listen(3000,()=>{
    console.log('server is working just fine')
})  

app.get('/get',(req,res,next)=>{

    res.send('this is working fimnxjne as well')
    next()
    
})