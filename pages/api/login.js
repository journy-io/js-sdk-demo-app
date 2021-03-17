import users from "../../users.json";
export default (req, res) => {
  const { email } = req.body;
  const user = users.find((user) => {
    return user.email === email;
  });
  if (!user) {
    return res.status(404).send();
  }
  return res.json(user);
};
