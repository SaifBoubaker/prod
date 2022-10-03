const jwt = require("jsonwebtoken");
const UserCollection = require("../models/user.js");

const authMiddleware = async (req, res, next) => {
  if (!req?.headers?.authorization) {
    return res.json("There is no token attached to the header");
  }
  let token;
  if (req?.headers?.authorization?.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1];
      if (token) {
        const decoded = jwt.verify(token, process.env.SECRET);
        const user = await UserCollection.findById(decoded?._id).select(
          "-password"
        );
        req.user = user;
        next();
      }
    } catch (error) {
      return res.json("Not authorized token expired, Login again");
    }
  }
};

module.exports = authMiddleware;
