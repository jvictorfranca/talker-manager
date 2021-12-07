const fs = require('fs');

module.exports = (req, res) => {
  const data = JSON.parse(fs.readFileSync('./talker.json', 'utf8'));
  const { id } = req.params;
  const personId = data.find((person) => person.id === parseInt(id, 10));
  if (personId) { return res.status(200).json(personId); }
  res.status(404).json({ status: 404, message: 'Pessoa palestrante não encontrada' });
};