import jwt from "jsonwebtoken";

export default async (data) => {
  try {
    return jwt.verify(data, process.env.JWT_ACCESS_TOKEN_KEY);
  } catch (error) {
    throw error;
  }
};
