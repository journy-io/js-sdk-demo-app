import { client } from "../../util/journy";
import { Event, UserIdentified, AccountIdentified } from "@journyio/sdk";
import getSession from "../../util/getSession";

async function handler(request, response) {
  const { newAccountId, oldAccountId } = request.body;
  const user = request.session.get("user");

  if (oldAccountId) {
    await client.addEvent(
      Event.forUserInAccount(
        "account_logout",
        UserIdentified.byUserId(user.id),
        AccountIdentified.byAccountId(oldAccountId)
      )
    );
  }

  await client.addEvent(
    Event.forUser("user_switched_accounts", UserIdentified.byUserId(user.id))
  );

  await client.addEvent(
    Event.forUserInAccount(
      "account_login",
      UserIdentified.byUserId(user.id),
      AccountIdentified.byAccountId(newAccountId)
    )
  );

  return response.send();
}

export default getSession(handler);
