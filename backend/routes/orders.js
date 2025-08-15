const express = require('express');
const router = express.Router();

// Создание заказа
router.post('/', (req, res) => {
  const { items, address, paymentMethod, total } = req.body;
  
  const order = {
    id: 'ORDER_' + Date.now(),
    items: items || [],
    address: address || '',
    paymentMethod: paymentMethod || 'card',
    total: total || 0,
    status: 'pending',
    createdAt: new Date().toISOString()
  };

  res.json({
    success: true,
    message: 'Заказ создан успешно',
    order
  });
});

// Получение заказов пользователя
router.get('/user/:userId', (req, res) => {
  const orders = [
    {
      id: 'ORDER_12345',
      items: [
        { name: 'Pizza Margherita', quantity: 1, price: 12.99 },
        { name: 'Pizza Rotterdam', quantity: 1, price: 15.99 }
      ],
      address: 'Berlin, Alexanderplatz 1, 10178 Berlin',
      total: 28.98,
      status: 'delivered',
      createdAt: '2024-01-15T10:30:00Z'
    }
  ];

  res.json({
    success: true,
    orders
  });
});

module.exports = router;
