const checkJWTToken = require("../lib/security").checkToken;

module.exports = function verifyUser() {
  return function (req, res, next) {
    const authorization =
      req.headers["Authorization"] ?? req.headers["authorization"];
    if (!authorization) {
      res.sendStatus(401);
      return;
    }

    // Authorization: BASIC token
    // Authorization: Bearer token
    const [type, token] = authorization.split(/\s+/);

    switch (type) {
      case "Basic":
        // const [clientId, clientSecret] = decodeBasicToken(token);
        // Check base client credentials
        // req.merchant = credentials.merchant
        next();
        break;
      case "Bearer":
        checkJWTToken(token)
          .then((user) => {
            // reload user form  base
            req.user = user;
            // if(user.merchant) req.merchant = user.merchant
            next();
          })
          .catch(() => res.sendStatus(401));
        break;
      default:
        res.sendStatus(401);
        break;
    }
  };
};
