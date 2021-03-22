import accounts from "../../../../../accounts.json";

export default function handler({ query: { id } }, response) {
  const account = accounts.find((account) => {
    return account.id === id;
  });

  if (!account) {
    return response.status(404).send();
  }

  response.json(account);
}
