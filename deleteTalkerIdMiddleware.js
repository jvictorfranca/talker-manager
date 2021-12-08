const fs = require('fs');

module.exports = (req, res, next) => {
  const data = JSON.parse(fs.readFileSync('./talker.json', 'utf8'));
  const { id } = req.params;
  const newData = data.filter((person) => person.id !== parseInt(id, 10));
  fs.writeFileSync('./talker.json', JSON.stringify(newData));
  console.log(newData);
  if (newData) {
 return res.status(200)
    .json({ message: 'Pessoa palestrante deletada com sucesso' }); 
}
  next();
};