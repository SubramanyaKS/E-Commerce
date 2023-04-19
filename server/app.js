const express = require('express');
const errorLogger = require('./services/errorLogger');
const userroute= require('./routes/userRouting');
const productroute= require('./routes/productRouting');
const cors = require('cors');
const app= express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/users', userroute);
app.use('/product', productroute);
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

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});