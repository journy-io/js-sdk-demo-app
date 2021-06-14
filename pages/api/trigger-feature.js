import { Event, UserIdentified, AccountIdentified } from "@journyio/sdk";
import { client } from "../../util/journy";
import getSession from "../../util/getSession";

async function handler(request, response) {
  const { featureName, accountId } = request.body;
  const user = request.session.get("user");

  await client.addEvent(
    Event.forUserInAccount(
      featureName,
      UserIdentified.byUserId(user.id),
      AccountIdentified.byAccountId(accountId)
    )
  );

  return response.send();
}

export default getSession(handler);
