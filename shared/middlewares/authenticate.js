import tokenVerify from "../../src/user/libs/token.verify.js";
import findUser from "../../src/user/libs/user.find.js";

export default async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];
    if (!token) res.status(400).send("Access Denied. Token required");

    let req_user = await tokenVerify(token);
    const user = await findUser(req_user.email);
    if (!user) return res.status(400).send("User dose not exist");
    req.user = req_user;
    next();
  } catch (error) {
    console.log(error);
    return res.status(400).send("Unauthorised");
  }
};
