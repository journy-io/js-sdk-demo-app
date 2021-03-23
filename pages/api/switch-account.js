import { client } from "../../util/journy";
import { Event } from "@journyio/sdk";
import getSession from "../../util/getSession";

async function handler(request, response) {
  const { accountId } = request.body;
  const user = request.session.get("user");

  await client.addEvent(
    Event.forUserInAccount("account_login", user.id, accountId)
  );

  return response.send();
}

export default getSession(handler);
