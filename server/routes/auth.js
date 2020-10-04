const express = require('express');

const router = express.Router();

//import validators
const {userRegisterValidator} = require('../validator/auth');
const {runValidation} = require('../validator')

const { register } = require('../controller/auth');

router.post('/register', userRegisterValidator, runValidation, register );



module.exports = router;
