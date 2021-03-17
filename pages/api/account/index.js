import accounts from "../../../accounts.json";
export default function handler(req, res) {
  res.status(200).json(accounts);
}
