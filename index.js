const express = require('express');
const { error } = require('./middleware');
const routes = require('./routes');

const PORT = 3000;

const app = express();

app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/', routes);

app.use(error);
  
app.listen(PORT, () => console.log(`conectado na porta ${PORT}`));