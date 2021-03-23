import accounts from "../data/accounts.json";

export const getUserAccounts = (loggedInUser) => {
  return accounts.filter(
    (account) =>
      account.users.find((user) => user.id === loggedInUser.id) !== undefined
  );
};
