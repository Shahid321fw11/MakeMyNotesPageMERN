const registerUser = (req, res) => {
  const { name, email, password, pic } = req.body;
  res.json({
    name,
    email,
  });
};

module.export = { registerUser };
