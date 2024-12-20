import genereatePasswordHash from "./libs/password.hash.js";
import generateAuthToken from "./libs/token.generate.js";
import findUser from "./libs/user.find.js";

export default async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send("Email and password are required");
    }

    const user = await findUser(email, password);
    if (!user) res.status(400).send("User not exist");

    const password_hash = await genereatePasswordHash(password);
    if (user.password !== password_hash) {
      return res.status(400).send("Password is incorrect");
    }

    const access_token = await generateAuthToken(user);
    return res
      .status(200)
      .send({ message: "Loggin successfully", access_token });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server Error");
  }
};
