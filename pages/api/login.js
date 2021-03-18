import users from "../../users.json";
import { withIronSession } from "next-iron-session";
import { applySession } from "next-iron-session";

async function handler(req, res) {
  const { email } = req.body;

  const user = users.find((user) => {
    return user.email === email;
  });

  req.session.set("user", user);
  await req.session.save();
  res.json(user);
  if (!user) {
    return res.status(404).send();
  }
}

export default withIronSession(handler, {
  password: process.env.SECRET_COOKIE_PASSWORD,
  cookieName: "MYSITECOOKIE",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
});
