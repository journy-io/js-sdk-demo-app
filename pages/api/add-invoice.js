import { Event, UserIdentified, AccountIdentified } from "@journyio/sdk";
import { client } from "../../util/journy";
import getSession from "../../util/getSession";

async function handler(request, response) {
  const { client_email, accountId, invoice_price, services } = request.body;
  const user = request.session.get("user");

  UserIdentified.byUserId(user.id), AccountIdentified.byAccountId(accountId);

  await client.addEvent(
    Event.forUserInAccount(
      "create-invoice",
      UserIdentified.byUserId(user.id),
      AccountIdentified.byAccountId(accountId)
    ).withMetadata({
      client_email,
      invoice_price,
      services,
    })
  );

  return response.send();
}

export default getSession(handler);
