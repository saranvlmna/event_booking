import { createHmac } from "crypto";
import config from "../../../shared/config/index.js";

export default async (data) => {
  try {
    return createHmac("sha256", config.app.auth_secret)
      .update(data)
      .digest("hex");
  } catch (error) {
    throw error;
  }
};
