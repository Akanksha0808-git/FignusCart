const jwt = require("jsonwebtoken");
const secretkey = "#@$%^&*"
const authMiddleware = (req, res, next) => {
  
  try {
    const Bearertoken = req.headers["authorization"];
    if (Bearertoken === undefined) {
      return res.status(401).json({ msg: "No Token" });
    }

    const token = Bearertoken.split(" ")[1];
    if (token === undefined) {
      return res.status(401).json({ msg: "User not Authenticated or Session Expired" });
    }
    const valid = jwt.verify(token, secretkey);
    if (valid) {
      return next();
    }
    return res.send({ msg: "user not allowed" })

  }

  catch (err) { return res.send({ msg: "not authorized for the particular resources" }); }

};
module.exports = authMiddleware;