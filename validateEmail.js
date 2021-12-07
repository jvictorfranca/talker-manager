// eslint-disable-next-line max-lines-per-function
module.exports = (req, res, next) => {
  const { email } = req.body;
  console.log(email);
  if (!email || email.length === 0) {
    return res.status(400)
    .json({ message: 'O campo "email" é obrigatório' }); 
}  
  if (!email.includes('@') || !email.includes('.com')) {
    return res.status(400)
    .json({ message: 'O "email" deve ter o formato "email@email.com"' }); 
}
  next();
};
