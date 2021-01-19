const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');

const users = [
    {
        username: "student1",
        nickname: "Ivan Petrov",
        template: "default",
        role: "student",
        id: "",
        subject: "Test 1",
        tags: ["Ivan Petrov"],
        exp: 1611164376,
        api: 'https://localhost:3000/report',
        invites: ['proctor1']
    
    },
    
    {
        username: "proctor1",
        role: "proctor"
    }
]

module.exports.login = (user)  => {
    //const user = users.find(u => { return u.username === username && u.password === password });
    const ganarate_uuid = uuidv4();
    console.log(ganarate_uuid);
    users[0].id = ganarate_uuid;
    return jwt.sign(users[0], 'secret', { algorithm: 'HS256' }); 
}
