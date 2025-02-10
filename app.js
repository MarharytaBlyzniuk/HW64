require('dotenv').config(); // Загружаем переменные окружения
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const indexRoute = require('./routes/index');

const app = express();

// Подключение к MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ MongoDB connected successfully'))
    .catch(err => console.error('❌ MongoDB connection error:', err));

// Middleware
app.use(cors({ credentials: true, origin: 'http://localhost:3000' })); // Разрешаем CORS для фронтенда
app.use(express.json()); // Обработка JSON
app.use(cookieParser()); // Работа с cookies
app.use(express.static(path.join(__dirname, 'public'))); // Подключение статических файлов

// Используем маршруты
app.use('/', indexRoute);

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
