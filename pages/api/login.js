import users from "../../data/users.json";
import getSession from "../../util/getSession";
import { client } from "../../util/journy";
import { Event, UserIdentified, AccountIdentified } from "@journyio/sdk";
import accounts from "../../data/accounts.json";

async function handler(request, response) {
  const { email } = request.body;
  const user = users.find((user) => {
    return user.email === email;
  });

  if (!user) {
    return response.status(401).send();
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
      company: user.company,
    },
  });

  for (const account of accounts.filter((account) =>
    account.users.find((member) => member.id === user.id)
  )) {
    await client.upsertAccount({
      accountId: account.id,
      properties: {
        name: account.name,
        registered_at: new Date(),
        mrr: typeof account.mrr === "number" ? account.mrr : null,
        plan: typeof account.plan === "string" ? account.plan : null,
      },
    });

    await client.addUsersToAccount({
      account: AccountIdentified.byAccountId(account.id),
      users: [UserIdentified.byUserId(user.id)],
    });
  }

  await client.addEvent(
    Event.forUser("user_login", UserIdentified.byUserId(user.id))
  );

  return response.json(user);
}

export default getSession(handler);
