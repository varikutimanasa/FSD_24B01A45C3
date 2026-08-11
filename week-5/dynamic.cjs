const express = require('express');
const app = express();
const PORT = 3000;
app.get('/', (req, res) => {
    res.send(`
        <h1>USER PROFILE</h1>
        <p>Server is working!</p>
    `);
});
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    res.send(`User ID is: ${id}`);
});
app.get('/search', (req, res) => {
    const name = req.query.name;
    const age = req.query.age;

    res.send(`Name: ${name}, Age: ${age}`);
});
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});