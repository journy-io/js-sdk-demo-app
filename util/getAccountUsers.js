import users from "../users.json";
import accounts from "../accounts.json";

export default function getUserAccounts(accountId) {
  const account = accounts.find((account) => account.id === accountId);

  return users.filter((elem) => account.users.find(({ id }) => elem.id === id));
}
