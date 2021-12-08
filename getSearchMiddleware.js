const fs = require('fs');

module.exports = (req, res, next) => {
  let data = JSON.parse(fs.readFileSync('./talker.json', 'utf8'));
  let { q } = req.query;
  if (!q) { q = ''; }
  q = q.toLowerCase();
  data = data.filter((person) => person.name.toLowerCase().includes(q));
  if (data) { return res.status(200).json(data); }
  next();
};