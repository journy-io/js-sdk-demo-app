import accounts from "../../../../../accounts.json";
export default function handler({ query: { id } }, res) {
  const account = accounts.find((account) => {
    return account.id === id;
  });
  if (!account) {
    return res.status(404).send();
  }
  return res.json(account);
}
