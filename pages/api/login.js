import users from "../../users.json";
import getSession from "../../util/getSession";

async function handler(req, res) {
  const { email } = req.body;

  const user = users.find((user) => {
    return user.email === email;
  });

  req.session.set("user", user);
  await req.session.save();

  if (user) {
    res.json(user);
  } else {
    return res.status(404).send();
  }
}

export default getSession(handler);
