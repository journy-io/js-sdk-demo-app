import getSession from "../../util/getSession";

function handler(req, response) {
  req.session.destroy();
  response.send();
}

export default getSession(handler);
