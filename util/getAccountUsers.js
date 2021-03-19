import users from "../users.json";
import accounts from "../accounts.json";

export default function getUserAccounts(accountId) {
  const account = accounts.find((account) => account.id === accountId);
  const accountUsers = users.filter((elem) =>
    account.users.find(({ id }) => elem.id === id)
  );
  return accountUsers;
}
