const express = require('express');
const users = require('./MOCK_DATA.json');

const app = express();

const PORT = 10000;

// Home Page
app.get('/', (req, res) => {
    res.send('Welcome to the homepage');
});

// All users
app.get('/api/users', (req, res) => {
    return res.json(users);
})

// Get user by ID
app.get('/api/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users.find(user => user.id == id);
    if (!user) {
        return res.status(404).json({
            message: `User with id ${id} not found`
        })
    }
    return res.json(user);
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});