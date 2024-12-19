import tokenVerify from "../../src/user/libs/token.verify.js";

export default async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];
    if (!token) return res.status(400).send("Access Denied. Token required");

    let req_user = await tokenVerify(token);
    req.user = req_user;
    next();
  } catch (error) {
    console.log(error);
    return res.status(400).send("Unauthorised");
  }
};
