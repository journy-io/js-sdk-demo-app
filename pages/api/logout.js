import getSession from "../../util/getSession";

function handler(req, response) {
  req.session.destroy();

  return response.send();
}

export default getSession(handler);
