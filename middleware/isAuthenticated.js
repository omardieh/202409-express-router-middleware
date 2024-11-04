const isAuthenticated = (req, res, next) => {
  const { username, password } = req.query;
  const foundUser = usersDB.find((user) => user.username === username);
  if (!foundUser) {
    res.status(400).json({ message: "user not found" });
    return;
  }
  const isPasswordMatch = foundUser.password === password;
  if (!isPasswordMatch) {
    res.status(400).json({ message: "wrong credentials" });
    return;
  }
  next();
};

module.exports = isAuthenticated;
