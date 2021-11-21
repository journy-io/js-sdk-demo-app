import getSession from "../../../util/getSession";
import users from "../../../data/users.json";
import accounts from "../../../data/accounts.json";

function handler(request, response) {
  const user = request.session.get("user");

  if (!user) {
    return response.status(401).send();
  }

  return response.send(
    accounts
      .filter((account) =>
        account.users.find((member) => member.id === user.id)
      )
      .map((account) => ({
        ...account,
        users: account.users.map((member) => ({
          ...member,
          ...users.find((user) => user.id === member.id),
        })),
      }))
  );
}

export default getSession(handler);
