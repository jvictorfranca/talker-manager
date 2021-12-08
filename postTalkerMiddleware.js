const fs = require('fs');

module.exports = (req, res, next) => {
  const data = JSON.parse(fs.readFileSync('./talker.json', 'utf8'));
  let newTalker = req.body;
  newTalker = {
    ...newTalker,
    id: data.length + 1,
  };
  data.push(newTalker);
  fs.writeFileSync('./talker.json', JSON.stringify(data));
  if (newTalker) { return res.status(201).json(newTalker); }
  next();
};