const express = require('express');
const router = express.Router();

// Обработка платежа картой
router.post('/card', (req, res) => {
  const { cardNumber, cardHolder, expiryDate, cvv } = req.body;
  
  if (!cardNumber || !cardHolder || !expiryDate || !cvv) {
    return res.status(400).json({
      success: false,
      message: 'Не все данные карты заполнены'
    });
  }

  // Заглушка - всегда успешный платеж
  res.json({
    success: true,
    message: 'Платеж успешно обработан (заглушка)',
    transactionId: 'TXN_' + Date.now(),
    amount: req.body.amount || 0
  });
});

// Обработка PayPal платежа
router.post('/paypal', (req, res) => {
  // Редирект на PayPal (заглушка)
  const paypalUrl = process.env.PAYPAL_REDIRECT_URL || 'https://www.paypal.com';
  
  res.json({
    success: true,
    message: 'Перенаправление на PayPal',
    redirectUrl: paypalUrl
  });
});

module.exports = router;
