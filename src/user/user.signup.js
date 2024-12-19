import createUser from "./libs/user.create.js";
import findUser from "./libs/user.find.js";

export default async (req, res) => {
  try {
    const { email, password, name } = req.body;
    if (!email || !password || !name) {
      res.status(400).send("Params are required");
    }

    const is_exist = await findUser(email);
    if (is_exist) res.status(404).send("User already exist given mail Id");

    await createUser({ email, password, name });
    res.status(200).send({ message: "Signup successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
