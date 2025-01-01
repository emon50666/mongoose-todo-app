const express = require('express');
const app = express();
app.use(express.json());

const port = 9000


app.get('/',(req,res)=>{
    res.send(`server running this ${port} port`)
})

app.listen(port,async()=>{
    console.log(`server running this ${port} port`);
})