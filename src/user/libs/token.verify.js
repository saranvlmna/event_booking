import jwt from "jsonwebtoken";
import config from "../../../shared/config/index.js";
export default async (data) => {
  try {
    return jwt.verify(data, config.app.auth_secret);
  } catch (error) {
    throw error;
  }
};
