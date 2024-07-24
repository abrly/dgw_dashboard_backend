
import express from 'express';

import bodyParser from 'body-parser';

import cors from 'cors';

const app = express();

import order_router from './routes/order_routes.js';

import reception_router from './routes/reception_routes.js';

import insurance_router from './routes/insurance_routes.js';
import jobinout_router from './routes/jobinout_routes.js';
import appointment_router from './routes/appointment_routes.js';

app.use(bodyParser.urlencoded({ extended:  true }));

app.use(bodyParser.json());

app.use(cors());

/*
order_router.use((request, response, next) => {
    console.log('middleware');
    next();
  }); */
  

/*app.use('/', (req,res,next)=>{
    res.send("DASHBOARD BE"); 
    next();   
});*/

app.use('/reception', reception_router);

app.use('/insurance', insurance_router);

app.use('/jobinout', jobinout_router);

app.use('/appointment', appointment_router);


const PORT = 8080;


app.listen(PORT, (error) =>{
    if(!error)        
        console.log("Server is Successfully Running, and App is  listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);