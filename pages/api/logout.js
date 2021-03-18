import getSession from "../../util/getSession";

function handler(req, res) {
    req.session.destroy();
    res.send("Logged out");
  }

  export default getSession(handler);
