const express=require('express')
const bodyParser=require('body-parser')
const graphqlHttp=require('express-graphql')

const app=express()
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.listen(3000,()=>{
    console.log('server is working just fine')
})  

app.use('/graphql',graphqlHttp({
    schema:null,
    rootValue:{}
}))