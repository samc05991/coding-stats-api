"use strict";

var express = require('express');
var router = express.Router();
var User = require('../models/user');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

module.exports = class Auth {

    constructor() {}

    authenticateUser(user) {
        var token = jwt.sign({ id: user._id }, 'SHOULDBEENV', {});
    
        return token
    }

    validatedToken(token) {
        return jwt.verify(token, 'SHOULDBEENV', 
            (err, decoded) => {
                if (err) {
                    return false;
                }

                return decoded;
            }
        );
    }
}
