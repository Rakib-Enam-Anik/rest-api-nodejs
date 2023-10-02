const { v4: uuidv4 } = require("uuid");
const users = [
    {
        id: uuidv4(),
        username: "rakib enam",
        email: "enam@gmail.com",
    },
    {
        id: uuidv4(),
        username: " arif khan",
        email: "arif@gmail.com",
    },
];

module.exports = users;