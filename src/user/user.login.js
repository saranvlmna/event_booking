import generateAuthToken from "./libs/token.generate.js";
import findUser from "./libs/user.find.js";

export default async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).send("Email and password are required");
    }

    const user = await findUser(email, password);
    if (!user) res.status(404).send("User not exisist");
    if (user.password !== password) {
      res.status(404).send("Password is incorrect");
    }

    const access_token = await generateAuthToken(user);
    res.status(200).send({ message: "Loggin successfully", access_token });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
