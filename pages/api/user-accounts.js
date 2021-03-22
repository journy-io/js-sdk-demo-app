import getSession from "../../util/getSession";
import { getUserAccounts } from "../../util/getUserAccounts";

function handler(request, response) {
  const loggedInUser = request.session.get("user");
  const userAccounts = getUserAccounts(loggedInUser);

  response.send({ userAccounts });
}

export default getSession(handler);
