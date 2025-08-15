const express = require('express');
const router = express.Router();

// Заглушка для автодополнения адресов
router.get('/autocomplete', (req, res) => {
  const query = req.query.q || '';
  
  // Примеры адресов в Германии
  const addresses = [
    'Berlin, Alexanderplatz 1, 10178 Berlin',
    'Hamburg, Mönckebergstraße 11, 20095 Hamburg',
    'München, Marienplatz 1, 80331 München',
    'Köln, Domkloster 4, 50667 Köln',
    'Frankfurt am Main, Römerberg 23, 60311 Frankfurt am Main',
    'Stuttgart, Schlossplatz 1, 70173 Stuttgart',
    'Düsseldorf, Marktplatz 1, 40213 Düsseldorf',
    'Dortmund, Westenhellweg 1, 44137 Dortmund',
    'Essen, Burgplatz 1, 45127 Essen',
    'Leipzig, Markt 1, 04109 Leipzig'
  ];

  const filteredAddresses = addresses.filter(address => 
    address.toLowerCase().includes(query.toLowerCase())
  );

  res.json({
    success: true,
    addresses: filteredAddresses.slice(0, 5)
  });
});

module.exports = router;
