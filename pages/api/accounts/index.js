import accounts from "../../../data/accounts.json";

export default function handler(req, res) {
  return res.json(accounts);
}
