

import express from 'express';

import bodyParser from 'body-parser';

const app = express();

import router from './route.js';

app.use(bodyParser.json());

app.use('/', router);

const PORT = 3000;


app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is  listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);