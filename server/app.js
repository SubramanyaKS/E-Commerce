const express = require('express');
const errorLogger = require('./services/errorLogger');
const userroute= require('./routes/userRouting');

const app= express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use('/users', userroute);
app.get("/",(req,res)=>{
    res.send("hello");
});

app.use(errorLogger)

app.all('*', (req, res, next) => {
    let err = new Error();
    err.message = 'Invalid Route';
    err.status = 404;
    next(err);
  });

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});