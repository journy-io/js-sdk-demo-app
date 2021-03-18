import getSession from "../../util/getSession";

function handler(req, res) {
  const user = req.session.get("user");
  res.send({ user });
}

export default getSession(handler);
