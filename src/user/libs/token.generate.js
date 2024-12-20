import jwt from "jsonwebtoken";
import config from "../../../shared/config/index.js";
export default async (data) => {
  try {
    return jwt.sign(data, config.app.auth_secret, {
      expiresIn: config.app.auth_token_exp,
    });
  } catch (error) {
    throw error;
  }
};
