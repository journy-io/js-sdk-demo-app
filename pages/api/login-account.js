import accounts from "../../accounts.json";
import { client } from "../../util/journyConfig";
import { Event } from "@journyio/sdk";

export default async function handler(req, res) {
  const { accountId, userId } = req.body;
  const account = accounts.find((account) => {
    return account.id === accountId;
  });

  //Trigger login event for account on journy
  await client.addEvent(
    Event.forUserInAccount("account_login", userId, accountId)
  );

  res.json(account);
}
