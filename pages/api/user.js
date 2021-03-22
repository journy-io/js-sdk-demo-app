import getSession from "../../util/getSession";

function handler(request, response) {
  const user = request.session.get("user");

  response.send({ user });
}

export default getSession(handler);
