const express = require('express');

const {PORT} = require('./config/config');

const app = express();

require('./config/mongoose');

app.get('/', (req,res)=>{
    res.send('Hello there')
});

app.listen(PORT,()=> console.log(`Server is listening on port: ${PORT}`))