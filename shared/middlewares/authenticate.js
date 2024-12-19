import tokenVerify from "../../src/user/libs/token.verify";

export default async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];
    if (!token) {
      return responder.unauthorized({
        message: "Access Denied. Token required",
      });
    }
    let req_user = tokenVerify(token);
    req.user = req_user;
    next();
  } catch (error) {
    console.log(error);
    return responder.unauthorized({ message: "Unauthorised" });
  }
};
