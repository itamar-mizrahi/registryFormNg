const express=require('express');
const bodyParser=require('body-parser');
var cors = require('cors')
const app=express();
app.use(cors());
app.use(bodyParser.json())
app.post('/',(req,res) => {console.log(req.body);
    res.send(req.body);
})
app.listen(process.env.port||1234,()=>console.log('Server listening...'));
