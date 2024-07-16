
import express from 'express';

import bodyParser from 'body-parser';

import cors from 'cors';

const app = express();

import order_router from './routes/order_routes.js';

app.use(bodyParser.urlencoded({ extended:  true }));

app.use(bodyParser.json());

app.use(cors());

/*
order_router.use((request, response, next) => {
    console.log('middleware');
    next();
  }); */
  

app.use('/', order_router);

const PORT = 3000;


app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is  listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);