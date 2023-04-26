import { analytics } from "../../util/analytics";
import getSession from "../../util/getSession";

async function handler(req, response) {
  const { userId } = req.body;

  analytics.track({
    userId: userId,
    event: "user_logout",
  });

  req.session.destroy();

  return response.send();
}

export default getSession(handler);
