import { ErrorRequestHandler, NextFunction, Request, Response } from "express";

// import { UserObj } from "../interfaces/user";

// const User = require('../models/userModel')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { SALT_WORK_FACTOR } = process.env;

const userController = {
    // createUser:, 
    // getUser: ,
    // verifyUser: ,
};


module.exports = userController;
