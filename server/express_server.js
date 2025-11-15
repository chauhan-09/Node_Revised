const express = require('express');
const app = express();
app.use(express.json()); //this is a middleware

app.get('/',(req,res) => {
    res.send('this is a get request');
})

app.get('/student',(req,res) => {
    res.send('this is student page');
})

app.post('/register', (req,res) => {
    res.send('this is a post request');
    console.log(req.body);
})

app.listen(3001, () => {
    console.log('server started');
})