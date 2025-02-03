// app.js

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const indexRoute = require('./routes/index'); // підключення маршруту

const app = express();

// Підключення до MongoDB Atlas
const uri = 'mongodb+srv://mablyzniuk:mablyzniuk@margo.rurfz.mongodb.net/?retryWrites=true&w=majority&appName=Margo'; // Вставте сюди ваш URI підключення

mongoose.connect(uri)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));

// Налаштування маршрутів
app.use(express.json()); // Для обробки JSON даних
app.use('/', indexRoute); // Використовуємо маршрути з файлу index.js

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
