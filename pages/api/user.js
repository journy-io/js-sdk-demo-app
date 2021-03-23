import getSession from "../../util/getSession";

function handler(request, response) {
  const user = request.session.get("user");

  return response.json(user);
}

export default getSession(handler);
