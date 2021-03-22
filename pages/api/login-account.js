import accounts from "../../accounts.json";
import { client } from "../../util/journyConfig";
import { Event } from "@journyio/sdk";

export default async function handler(request, response) {
  const { accountId, userId } = request.body;
  const account = accounts.find((account) => {
    return account.id === accountId;
  });

  await client.addEvent(
    Event.forUserInAccount("account_login", userId, accountId)
  );

  response.json(account);
}
