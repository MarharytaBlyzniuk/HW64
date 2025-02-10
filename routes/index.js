const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('<h1> !!!HELLO!!!</h1><p> It is OK---<a href="/test"> ____TEST____</a></p>');
});

// Тестовый маршрут
router.get('/test', (req, res) => {
    res.json({ message: 'API is working!' });
});

// Установка и получение cookies
router.get('/set-theme', (req, res) => {
    res.cookie('theme', 'dark', { maxAge: 900000, httpOnly: true });
    res.send('Theme saved in cookies');
});

router.get('/get-theme', (req, res) => {
    res.json({ theme: req.cookies?.theme || 'light' });
});

// Авторизация через JWT
router.post('/login', (req, res) => {
    try {
        const user = { id: 1, username: 'testuser' };
        const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.cookie('token', token, { httpOnly: true });
        res.json({ message: 'Logged in successfully', token });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

// Проверка JWT
router.get('/protected', (req, res) => {
    try {
        const token = req.cookies?.token;
        if (!token) return res.status(401).json({ message: 'Unauthorized' });

        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) return res.status(403).json({ message: 'Invalid token' });
            res.json({ message: 'Access granted', user });
        });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

module.exports = router;
