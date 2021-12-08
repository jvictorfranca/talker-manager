module.exports = (req, res, next) => {
  const { talk } = req.body;
  if (talk.watchedAt[2] !== '/' || talk.watchedAt[5] !== '/') {
     return res
    .status(400).json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' }); 
  }
  if (talk.watchedAt[2] !== '/' || talk.watchedAt[5] !== '/') {
    return res
   .status(400).json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' }); 
 }
  next();
};