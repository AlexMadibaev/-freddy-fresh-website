const express = require('express');
const router = express.Router();

// Заглушка для регистрации
router.post('/register', (req, res) => {
  res.json({
    success: true,
    message: 'Регистрация успешна (заглушка)',
    user: {
      id: '12345',
      email: req.body.email,
      name: req.body.name
    }
  });
});

// Заглушка для входа
router.post('/login', (req, res) => {
  res.json({
    success: true,
    message: 'Вход выполнен успешно (заглушка)',
    user: {
      id: '12345',
      email: req.body.email,
      name: 'Тестовый пользователь'
    },
    token: 'fake-jwt-token-12345'
  });
});

// Заглушка для выхода
router.post('/logout', (req, res) => {
  res.json({
    success: true,
    message: 'Выход выполнен успешно (заглушка)'
  });
});

module.exports = router;
