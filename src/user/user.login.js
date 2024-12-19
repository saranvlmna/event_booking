import tokenGenerate from "./libs/token.generate.js";
import userFind from "./libs/user.find.js";

export default async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send("Email and password are required");
    }

    const user = await userFind(email, password);
    if (!user) return res.status(404).send("User not found");

    if (user.password !== password) {
      return res.status(404).send("Password is incorrect");
    }
    const accessToken = await tokenGenerate(user);
    res.status(200).send({ message: "Loggin successfully", accessToken });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
