import getSession from "../../util/getSession";
import accounts from "../../accounts.json";

function handler(req, res) {
  const loggedInUser = req.session.get("user");
  const userAccounts = accounts.filter(
    (account) =>
      account.users.find((user) => user.id === loggedInUser.id) !== undefined
  );
  res.send({ userAccounts });
}

export default getSession(handler);
