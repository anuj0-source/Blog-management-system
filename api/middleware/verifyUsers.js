import jwt from "jsonwebtoken";

export const optionalVerifyToken = (req, res, next) => {
  const token = req.cookies?.access_token;
  if (!token) {
    req.user = null;
    return next();
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      req.user = null;
    } else {
      req.user = user;
    }
    next();
  });
};
