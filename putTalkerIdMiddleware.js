const fs = require('fs');

module.exports = (req, res, next) => {
  const data = JSON.parse(fs.readFileSync('./talker.json', 'utf8'));
  let newTalker = req.body;
  const { id } = req.params;
  newTalker = {
    ...newTalker,
    id: parseInt(id, 10),
  };
  const beforeData = data.filter((person) => person.id < parseInt(id, 10));
  const afterData = data.filter((person) => person.id > parseInt(id, 10));
  const newData = [...beforeData, newTalker, ...afterData];
  fs.writeFileSync('./talker.json', JSON.stringify(newData));
  console.log(newData);
  if (newTalker) { return res.status(200).json(newTalker); }
  next();
};