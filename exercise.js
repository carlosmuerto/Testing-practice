const stringLength = (string) => {
  if (string.length < 1) throw Error('string most have at lest 1 character');
  if (string.length > 10) throw Error('string most be not longer than 10 characters');
  return string.length;
};

module.exports = { stringLength };