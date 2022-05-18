import { Event, AccountIdentified } from "@journyio/sdk";
import { client } from "../../util/journy";
import getSession from "../../util/getSession";

async function handler(request, response) {
  const { accountId } = request.body;

  await client.addEvent(
    Event.forAccount("churned", AccountIdentified.byAccountId(accountId))
  );

  return response.send();
}

export default getSession(handler);
