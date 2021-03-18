import { Event } from "@journyio/sdk";
import { client } from '../../util/journyConfig'
import getSession from "../../util/getSession";


async function handler(req, res) {
  const user = req.session.get("user");
  client.addEvent(Event.forUser("create-invoice", user.id));

return user
}
export default getSession(handler);
