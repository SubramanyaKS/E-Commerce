const express = require('express');
const userController= require('../controllers/userController');
const userrouting = express.Router();

userrouting.get('/', userController.getUser);
userrouting.post('/', userController.newUser);
userrouting.put('/:id', userController.updateUser);
userrouting.get('/:id', userController.getUserId);
userrouting.post('/login', userController.userLogin);
userrouting.all('*', userController.invalid);

module.exports = userrouting;