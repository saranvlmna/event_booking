import jwt from "jsonwebtoken";

export default async (data) => {
  try {
    return jwt.sign(data, process.env.JWT_ACCESS_TOKEN_KEY, {
      expiresIn: process.env.ACCESS_TOKEN_EXP,
    });
  } catch (error) {
    throw error;
  }
};
