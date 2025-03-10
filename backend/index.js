const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const taskRoutes = require('./routes/tasks');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.use('/tasks', taskRoutes);

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
