import { Router } from 'express';
import UserController from './UserController.js';

const router = Router();

router.get(
  '/register',
  UserController.register
);


/*
app.get('/hello', (req, res)=>{
    res.set('Content-Type', 'text/html');
    res.status(200).send("<h1>Hello GFG Learner!</h1>");
});


// GET request handler
app.get('/users', (req, res) => {
    // Logic to handle the GET request for retrieving users
    res.send('GET /users');
  });
  
  // POST request handler
  app.post('/users', (req, res) => {
    // Logic to handle the POST request for creating a new user
    res.status(201).send('User created successfully');
  });
  
  // PUT request handler
  app.put('/users/:id', (req, res) => {
    const userId = req.params.id;
    // Logic to handle the PUT request for updating a user with the specified ID
    res.send(`PUT /users/${userId}`);
  });
  
  // DELETE request handler
  app.delete('/users/:id', (req, res) => {
    const userId = req.params.id;
    // Logic to handle the DELETE request for deleting a user with the specified ID
    res.send(`DELETE /users/${userId}`);
  });


  */


export default router;