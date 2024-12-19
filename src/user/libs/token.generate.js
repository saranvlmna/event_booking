import jwt from "jsonwebtoken";

export default async (data) => {
  try {
    const accessToken = jwt.sign(data, process.env.JWT_ACCESS_TOKEN_KEY, {
      expiresIn: process.env.ACCESS_TOKEN_EXP,
    });
    return accessToken;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
