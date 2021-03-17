import { Client, Event } from "@journyio/sdk";
import { HttpClientNode } from "@journyio/http";

const config = {
  apiKey: process.env.API_KEY,
  rootUrl: process.env.API_URL,
};

const client = new Client(new HttpClientNode(5000), config);
client.getApiKeyDetails().then((details) => {
  console.log(
    details,
    `ApiKey details: ${details.requestId}, ${details.callsRemaining}, ${details.success}`
  );
});

export default async (req, res) => {
  try {
    await client.addEvent(Event.forUser("create-invoice", "test"));
    res.status(200).send();
  } catch (err) {
    res.status(500).send();
    res.end();
  }
};
