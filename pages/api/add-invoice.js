import { Event } from "@journyio/sdk";
import { client } from '../../util/journyConfig'

export default async (req, res) => {
  try {
    await client.addEvent(Event.forUser("create-invoice", "test"));
    res.status(200).send();
  } catch (err) {
    res.status(500).send();
  }
};
