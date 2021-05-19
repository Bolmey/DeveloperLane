const express = require('express');
const connectDB = require('./config/db');

const app = express();
const cors = require('cors');
// const mongoose = require('mongoose')

// Connect Database
connectDB();

app.use(cors());

app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

// Define Routes
app.use('/', require('./routes/routes.js'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// mongoose
//     .connect(process.env.MONGODB_URI || 'mongodb+srv://admin123:admin123@cluster0.hhdrc.mongodb.net/Devlane?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(x => console.log(`Connected to ${x.connections[0].name}`))
//     .catch(() => console.error("Error connecting to Mongo"))

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
