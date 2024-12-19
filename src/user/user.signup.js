import userCreate from "./libs/user.create.js";
import userFind from "./libs/user.find.js";

export default async (req, res) => {
  try {
    const { email, password, name } = req.body;
    if (!email || !password || !name) {
      return res.status(400).send("Params are required");
    }

    const isExist = await userFind(email);
    if (isExist) return res.status(404).send("User already exist given mailId");

    await userCreate({ email, password, name });
    res.status(200).send({ message: "Signup successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
