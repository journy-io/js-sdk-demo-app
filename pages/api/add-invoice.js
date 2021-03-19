import { Event } from "@journyio/sdk";
import { client } from "../../util/journyConfig";
import getSession from "../../util/getSession";

async function handler(req, res) {
  const { accountId } = req.body;
  const user = req.session.get("user");

  //Trigger event in journy
  client.addEvent(Event.forUserInAccount("create-invoice", user.id, accountId));

  res.send(200);
}
export default getSession(handler);
