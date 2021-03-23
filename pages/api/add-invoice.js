import { Event } from "@journyio/sdk";
import { client } from "../../util/journy";
import getSession from "../../util/getSession";

async function handler(request, response) {
  const { client_email, accountId, invoice_price, services } = request.body;
  const user = request.session.get("user");

  await client.addEvent(
    Event.forUserInAccount("create-invoice", user.id, accountId).withMetadata({
      client_email,
      invoice_price,
      services,
    })
  );

  return response.send();
}

export default getSession(handler);
