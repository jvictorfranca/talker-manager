/* eslint-disable complexity */

const generateString = require('./utils/generateString');

// eslint-disable-next-line max-lines-per-function
module.exports = (req, res) => res.status(200).json({ token: generateString(15) });
