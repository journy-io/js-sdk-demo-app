import users from "../../users.json";
import getSession from "../../util/getSession";
import { client } from "../../util/journyConfig";
import { Event } from "@journyio/sdk";

import { getUserAccounts } from "../../util/getUserAccounts";
import { addAccounts } from "../../util/journyConfig";

async function handler(req, res) {
  const { email } = req.body;

  const user = users.find((user) => {
    return user.email === email;
  });

  req.session.set("user", user);
  await req.session.save();

  if (user) {
    //Add User to journy.io
    await client.upsertUser({
      userId: user.id,
      email: user.email,

      properties: {
        first_name: user.first_name,
        last_name: user.last_name,
        registered_at: new Date(),
      },
    });

    //Add user accounts to journy.io
    const userAccounts = getUserAccounts(user);
    for (const account of userAccounts) {
      addAccounts(account);
    }

    //Trigger login event on journy
    await client.addEvent(Event.forUser("login", user.id));

    res.json(user);
  } else {
    return res.status(404).send();
  }
}

export default getSession(handler);
