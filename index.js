const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1>🎉 Meu primeiro projeto Node.js online!</h1>
    <h2>Agenda Salão</h2>
    <p><strong>Desenvolvido por:</strong> Thiago Nonato</p>
    <p><strong>Status:</strong> Online e funcionando! ✅</p>
    <hr>
    <p><em>Este é meu primeiro site feito com Node.js e Express!</em></p>
  `);
});

app.listen(PORT, () => {
  console.log('🚀 Servidor rodando na porta ' + PORT);
});
