import { analytics } from "../../util/analytics";
import getSession from "../../util/getSession";

async function handler(request, response) {
  const { client_email, accountId, invoice_price, services } = request.body;
  const user = request.session.get("user");

  analytics.track({
    userId: user.id,
    event: "create-invoice",
    properties: {
      client_email: client_email,
      invoice_price: invoice_price,
      services: services,
    },
    context: {
      groupId: accountId,
    },
  });

  return response.send();
}

export default getSession(handler);
