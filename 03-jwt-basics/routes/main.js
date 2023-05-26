exports.login = async (req, res) => {
  res.send('working');
};

exports.dashboard = async (req, res) => {
  const luckNumber = Math.floor(Math.random() * 99);
  res
    .status(200)
    .json({ msg: `hello, Here is your lucky number ${luckNumber}` });
};
