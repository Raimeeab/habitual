const jwt = require("jsonwebtoken");

// Set token secret and expiration date
const secret = process.env.JWTSECRET;
const expiration = "2h";

module.exports = {
  // Function for authenticated routes
  authMiddleware: function ({ req }) {
    // allows token to be sent via  req.query or headers
    let token = req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }

    if (!token) {
      // console.log("please provide a valid token");
      return req;
    }

    // verify token and get user data out of it
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log("Invalid token");
      return req;
    }

    // send to next endpoint
    return req;
  },
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };
    console.log("secret output", secret);

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
