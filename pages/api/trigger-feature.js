import { analytics } from "../../util/analytics";
import getSession from "../../util/getSession";

async function handler(request, response) {
  const { featureName, accountId } = request.body;
  const user = request.session.get("user");

  analytics.track({
    userId: user.id,
    event: featureName,
    context: {
      groupId: accountId,
    },
  });

  return response.send();
}

export default getSession(handler);
