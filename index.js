const express = require('express');
const bodyParser = require('body-parser');
const getTalkerMiddleware = require('./getTalkerMiddleware');
const getTalkerIdMiddleware = require('./getTalkerIdMiddleware');
const postLoginMiddleware = require('./postLoginMiddleware');
const validatePassword = require('./validatePassword');
const validateEmail = require('./validateEmail');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', getTalkerMiddleware);
app.get('/talker/:id', getTalkerIdMiddleware);
app.post('/login', validateEmail, validatePassword, postLoginMiddleware);

app.listen(PORT, () => {
  console.log('Online');
});
