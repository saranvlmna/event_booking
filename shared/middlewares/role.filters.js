export default (...roles) => {
  return async (req, res, next) => {
    try {
      const role = req.user.type;
      if (role == null) {
        res.status(400).send("No roles available for this user");
      }
      if (!roles.includes(role)) {
        res.status(400).send("Access Denied. Permission denied");
      }
      next();
    } catch (error) {
      console.log(error);
      res.status(400).send("Unauthorised");
    }
  };
};
