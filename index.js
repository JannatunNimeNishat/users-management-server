const express = require('express');
const app = express();

const port = process.env.PORT  || 5000;


const users = [

    {id:1 , name:"Sabana" ,email:"Sabana@gmail.com" },
    {id:2 , name:"Sabnoor" ,email: "sabnoor@gmail.com"},
    {id:3 , name: "Sabile",email: "Sabila@gmail.com"},

]


app.get('/',(req,res)=>{
    res.send('Users Management server is up and running')
})

app.get('/users',(req,res)=>{
    res.send(users);
})


app.listen(port, ()=>{
    console.log(`Running at port: ${port}`);
})










