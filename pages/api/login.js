import accounts from "../../accounts.json";
export default async (req, res) => {
  const { email } = req.body;
  try {
    await accounts.map((account) => {
      if (account.email === email) {
        res.json(account);
      }
    });
  } catch (err) {
    res.status(500).send();
    res.end();
  }
};
