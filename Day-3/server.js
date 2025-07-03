const express = require('express');

const app = express();

app.use(express.json());
const notes = [];

app.get('/home', (req, res) => {
    res.send('Welcome to home page');
})

app.get('/about', (req, res) => {
    res.send('Welcome to about page');
})

app.post('/notes', (req, res) => {
    console.log(req.body)
    notes.push(req.body);
    res.status(200).send({
        title : "Noted has been added",
        notes: notes
    })
})

app.listen(3000, ()=> {
    console.log('Server is running on port 3000');
    
})