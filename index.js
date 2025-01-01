const express = require('express');
const mongoose = require('mongoose')

const app = express();
app.use(express.json());

const port = 9000


// database connect in db
const connectDB = async()=>{
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/todos',{
            useNewUrlParser: true,
            useUnifiedTopology: true

        })
        console.log('db is connected');
    }
    catch(err){
        console.log(err,'db not connect');
    }
}




app.get('/',(req,res)=>{
    res.send(`server running this ${port} port`)
})

app.listen(port,async()=>{
    console.log(`server running this ${port} port`);
    await connectDB()
})