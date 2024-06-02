import jwt from "jsonwebtoken";
import User from "../models/usersSchema.js";

export const authMiddleware = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: "Authorization header is missing" });
  }

  const token = authorization.split(" ")[1];
  const bearer = authorization.split(" ")[0];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user || user.token !== token || bearer !== "Bearer") {
      return res.status(401).json({ message: "Unauthorized" });
    }

    req.user = user;
    next();

    // console.log(user);
    // console.log(req.user);
  } catch (e) {
    next(e);
  }
};
