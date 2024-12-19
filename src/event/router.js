import express from "express";
import authenticate from "../../shared/middlewares/authenticate.js";
import roleFilters from "../../shared/middlewares/role.filters.js";
import constants from "../../shared/utilities/constants.js";
import eventBook from "./event.book.js";
import eventCreate from "./event.create.js";
const eventRouter = express.Router();

eventRouter.post(
  "/",
  authenticate,
  roleFilters(constants.USER_TYPES.ADMIN),
  eventCreate
);

eventRouter.post("/book", authenticate, eventBook);

export default eventRouter;
