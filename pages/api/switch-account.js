import { client } from "../../util/journy";
import { Event, UserIdentified, AccountIdentified } from "@journyio/sdk";
import getSession from "../../util/getSession";

async function handler(request, response) {
  const { accountId } = request.body;
  const user = request.session.get("user");

  await client.addEvent(
    Event.forUserInAccount(
      "account_login",
      UserIdentified.byUserId(user.id),
      AccountIdentified.byAccountId(accountId)
    )
  );

  return response.send();
}

export default getSession(handler);
