module.exports = (req, res, next) => {
  const { talk } = req.body;
 if (typeof parseInt(talk.rate, 10) !== 'number'
  || parseInt(talk.rate, 10) < 1
  || parseInt(talk.rate, 10) > 5
  || parseFloat(talk.rate) !== parseInt(talk.rate, 10)) {
  return res
 .status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' }); 
}
  next();
};