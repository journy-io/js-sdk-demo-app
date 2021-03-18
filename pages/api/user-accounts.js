import getSession from "../../util/getSession";
import {getUserAccounts} from "../../util/getUserAccounts";

function handler(req, res) {
  const loggedInUser = req.session.get("user");
  const userAccounts = getUserAccounts(loggedInUser)
  res.send({ userAccounts });
}

export default getSession(handler);
