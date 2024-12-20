import express from "express";
import authenticate from "../../shared/middlewares/authenticate.js";
import roleFilters from "../../shared/middlewares/role.filters.js";
import constants from "../../shared/utilities/constants.js";
import bookAEvent from "./event.book.js";
import eventBookedCount from "./event.booked.count.js";
import createEvent from "./event.create.js";
import listAllEvents from "./event.list.js";
const eventRouter = express.Router();

eventRouter.post(
  "/",
  authenticate,
  roleFilters(constants.USER_TYPES.ADMIN),
  createEvent
);

eventRouter.get("/", authenticate, listAllEvents);

eventRouter.post("/book", authenticate, bookAEvent);
eventRouter.get("/booked/count", authenticate, eventBookedCount);

export default eventRouter;
