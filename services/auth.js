const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');

const users = [
    {
        username: "student1",
        nickname: "Ivan Petrov",
        template: "default",
        role: "student",
        id: uuidv4(),
        subject: "Test 1",
        tags: ["Ivan Petrov"],
        exp: 1611164376,
        api: 'https://localhost:3000/report/'
    
    }
]

module.exports.login = (user)  => {
    //const user = users.find(u => { return u.username === username && u.password === password });
    return jwt.sign(users[0], 'secret', { algorithm: 'HS256' }); 
}