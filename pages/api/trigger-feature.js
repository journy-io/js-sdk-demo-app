import { Event, UserIdentified, AccountIdentified } from "@journyio/sdk";
import { client } from "../../util/journy";
import getSession from "../../util/getSession";

async function handler(request, response) {
  const { featureName, accountId } = request.body;
  const user = request.session.get("user");

  await client.addEvent(
    Event.forUserInAccount(
      "trigger-feature",
      UserIdentified.byUserId(user.id),
      AccountIdentified.byAccountId(accountId)
    ).withMetadata({
      feature_name: featureName,
    })
  );

  return response.send();
}

export default getSession(handler);
