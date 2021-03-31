import { client } from "../../util/journy";
import { Event, UserIdentified, AccountIdentified } from "@journyio/sdk";
import getSession from "../../util/getSession";

async function handler(request, response) {
  const { newAccountId, oldAccountId } = request.body;
  const user = request.session.get("user");

  await client.addEvent(
    Event.forAccount(
      "account_logout",
      AccountIdentified.byAccountId(oldAccountId)
    )
  );

  await client.addEvent(
    Event.forUser("user_switched_accounts", UserIdentified.byUserId(user.id))
  );

  await client.addEvent(
    Event.forAccount(
      "account_login",
      AccountIdentified.byAccountId(newAccountId)
    )
  );

  return response.send();
}

export default getSession(handler);
