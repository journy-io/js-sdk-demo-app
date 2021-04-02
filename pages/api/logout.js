import { client } from "../../util/journy";
import { Event, UserIdentified, AccountIdentified } from "@journyio/sdk";
import getSession from "../../util/getSession";

async function handler(req, response) {
  const { userId, accountId } = req.body;

  await client.addEvent(
    Event.forUserInAccount(
      "account_logout",
      UserIdentified.byUserId(userId),
      AccountIdentified.byAccountId(accountId)
    )
  );

  await client.addEvent(
    Event.forUser("user_logout", UserIdentified.byUserId(userId))
  );

  req.session.destroy();

  return response.send();
}

export default getSession(handler);
