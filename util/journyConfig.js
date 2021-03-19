import { Client } from "@journyio/sdk";
import { HttpClientNode } from "@journyio/http";

const config = {
  apiKey: process.env.API_KEY,
  rootUrl: process.env.API_URL,
};

export const client = new Client(new HttpClientNode(5000), config);

export const addAccounts = (account) => {
  client.upsertAccount({
    accountId: account.id,
    name: account.name,

    properties: {
      registered_at: new Date(),
    },
    members: account.users.map((user) => user.id),
  });
};
