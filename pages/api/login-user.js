import users from "../../users.json";
import getSession from "../../util/getSession";
import { client } from "../../util/journyConfig";
import { Event } from "@journyio/sdk";
import { getUserAccounts } from "../../util/getUserAccounts";
import { addAccounts } from "../../util/journyConfig";

async function handler(request, response) {
  const { email } = request.body;
  const user = users.find((user) => {
    return user.email === email;
  });

  if (!user) {
    return response.sendStatus(401);
  }

  request.session.set("user", user);
  await request.session.save();

  await client.upsertUser({
    userId: user.id,
    email: user.email,
    properties: {
      first_name: user.first_name,
      last_name: user.last_name,
      registered_at: user.registered_at,
    },
  });

  const userAccounts = getUserAccounts(user);
  for (const account of userAccounts) {
    await addAccounts(account);
  }

  await client.addEvent(Event.forUser("user_login", user.id));

  response.json(user);
}

export default getSession(handler);
