// routes/index.js

const express = require('express');
const Item = require('../models/item'); // Модель для доступу до даних MongoDB
const router = express.Router();

// Маршрут для отримання всіх елементів
router.get('/items', async (req, res) => {
    try {
        // Отримуємо всі елементи з колекції "items"
        const items = await Item.find();
        res.json(items); // Відправляємо дані на клієнт
    } catch (err) {
        res.status(500).send('Error retrieving items');
    }
});

module.exports = router;
