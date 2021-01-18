const express = require('express');
const router = express.Router();
const authService = require('../services/auth');

const users = [
    {
        username: "student1",
        nickname: "Ivan Petrov",
        template: "default",
        id: "b3875623-e96a-4cf0-9d6d-828331bda025",
        subject: "Test 1",
        tags: ["Ivan Petrov"]
    }
]

router.post('/login', (req, res, next) => {
    let accessToken = authService.login();
    res.send(accessToken);
});

module.exports = router;