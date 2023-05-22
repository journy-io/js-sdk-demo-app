import { analytics } from "../../util/analytics";
import getSession from "../../util/getSession";

async function handler(request, response) {
  const { featureName, accountId } = request.body;
  const user = request.session.get("user");

  await new Promise((resolve) => {
    analytics.track(
      {
        userId: user.id,
        event: featureName,
        context: {
          groupId: accountId,
        },
      },
      resolve
    );
  });

  return response.send();
}

export default getSession(handler);
