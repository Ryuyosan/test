const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

let tasks = [];

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  const { task } = req.body;
  tasks.push(task);
  res.status(201).json({ message: 'Task added successfully' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
