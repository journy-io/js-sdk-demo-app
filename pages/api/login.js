import users from "../../data/users.json";
import getSession from "../../util/getSession";
import { analytics } from "../../util/analytics";
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

  analytics.identify({
    userId: user.id,
    traits: {
      email: user.email,
      firstName: user.first_name,
      lastName: user.last_name,
      createdAt: user.registered_at,
      company: user.company,
    },
  });

  for (const account of accounts.filter((account) =>
    account.users.find((member) => member.id === user.id)
  )) {
    const membership = account.users.find((member) => member.id === user.id);

    if (!membership) {
      throw new Error("Huh?");
    }

    analytics.group({
      userId: user.id,
      groupId: account.id,
      traits: {
        name: account.name,
        createdAt: new Date(),
        logo: account.domain,
        mrr: typeof account.mrr === "number" ? account.mrr : null,
        plan: typeof account.plan === "string" ? account.plan : null,
      },
      context: {
        relationship: {
          role: membership.role,
        },
      },
    });
  }

  analytics.track({
    userId: user.id,
    event: "user_login",
  });

  return response.json(user);
}

export default getSession(handler);
