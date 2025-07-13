// server.js
const express = require('express');
const { body, validationResult } = require('express-validator');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.post('/submit-form', [
  body('name').trim().notEmpty(),
  body('email').isEmail().normalizeEmail(),
  body('message').trim().notEmpty()
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).send('Invalid form data.');

  res.send('✅ Message received!');
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
