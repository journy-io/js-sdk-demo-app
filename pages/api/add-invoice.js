import { Event } from "@journyio/sdk";
import { client } from "../../util/journyConfig";
import getSession from "../../util/getSession";

async function handler(req, res) {
  const { client_email, accountId, invoice_price, services } = req.body;
  const user = req.session.get("user");
  //Trigger event in journy
  client.addEvent(
    Event.forUserInAccount("create-invoice", user.id, accountId).withMetadata({
      client_email,
      invoice_price,
      services,
    })
  );

  res.send(200);
}
export default getSession(handler);
