import jwt from "jsonwebtoken";

export default async (data) => {
  try {
    return jwt.verify(data, process.env.JWT_ACCESS_TOKEN_KEY);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
