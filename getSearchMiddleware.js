const fs = require('fs');

module.exports = (req, res, next) => {
  const data = JSON.parse(fs.readFileSync('./talker.json', 'utf8'));
  const { q } = req.query;
  console.log(q);
  if (data) { return res.status(200).json(data); }
  next();
};