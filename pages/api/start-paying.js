import { analytics } from "../../util/analytics";
import getSession from "../../util/getSession";

async function handler(request, response) {
  const { accountId } = request.body;

  analytics.track({
    anonymousId: accountId,
    event: "started_paying",
    context: {
      groupId: accountId,
    },
  });

  return response.send();
}

export default getSession(handler);
